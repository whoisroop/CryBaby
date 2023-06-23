import React from "react";
import { useState, useEffect } from "react";
import Storage from "./firebase";
import { ref, uploadBytes,listAll, getDownloadURL } from "firebase/storage";
import '../css/document.css'


const Cocuments=()=>{

    let useremail = localStorage.getItem('useremail')
    if(useremail!="" && useremail!=null){
      useremail = useremail.split("@")[0]
    }
    const [fileUpload, setFileUpload] = useState(null)
    const [pdfFiles, setPdfFiles] = useState([]);


    const uploadFile =()=>{
        if(fileUpload==null){
            alert("Please select file");
            return;
        }

        

        const fileref = ref(Storage, `${useremail}/${fileUpload.name}`)

        uploadBytes(fileref, fileUpload).then(()=>{
            alert("file uploaded successfully");
        }).catch((err)=>{
            console.log(err);
        })

    }

    useEffect(() => {
        const storageRef = ref(Storage, `${useremail}/`);
    
        listAll(storageRef)
          .then(async (res) => {
            const pdfFiles = [];
            for (const item of res.items) {
              if (item.name.endsWith(".pdf")) {
                const downloadURL = await getDownloadURL(item);
                pdfFiles.push({ name: item.name, url: downloadURL });
              }
            }
            setPdfFiles(pdfFiles);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      const downloadFile = (url) => {
        window.open(url, "_blank");
      };


    return(

        <>
    {/* {localStorage.setItem('appname', 'new value')} */}
<body id="docbody">
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <form
          id="uploader_form"
          className="scaffold-form"
          name="uploader_form"
          action="/catalog/product/view/id/210/"
          method="post"
          encType="multipart/form-data"
        >
          <div className="uploader_form">
            <div className="fieldset">
              <ul style={{ listStyle: "none" }}>
                <li style={{ padding: 10 }}>
                  <div className="button-set">
                    <div className="ajax-upload-dragdrop upload-drag-and-drop-box">
                      <img
                        // src="https://res.cloudinary.com/dtutqsucw/image/upload/v1438955603/file-upload-01.png"
                        // alt="upload-file"
                      />
                      <br />
                      <p className="file-type-desc">
                         Upload medical files (.pdf format)
                      </p>
                      <strong>
                        <p className="drag-drop-text">
                          Drag &amp; Drop Files Here <br /> OR
                        </p>
                        <div
                          className="browse-button"
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            cursor: "default"
                          }}
                        >
                          <input type="file" 
            onChange={(event)=>{
            setFileUpload(event.target.files[0]);
            console.log(event.target.files[0].name)
        }}/>
                        </div>
                      </strong>
                    </div>
                    <strong></strong>
                  </div>
                </li>
              </ul>
            </div>
            <strong></strong>
          </div>
        </form>
        <strong>
          <div className="file-upload-buttons">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: 10 }}>
                <div className="add-to-cart">
                  
                  &nbsp;&nbsp;
                  <button
                    className="form-upload-button"
                    onClick={uploadFile}
                  >
                    <span>
                      <span id="uploadButtonName">
                        <p>
                          <font color="white">Upload   </font>
                          
                          <img
                            src="https://res.cloudinary.com/dtutqsucw/image/upload/v1438960670/file-upload.png"
                            className="animated slideInUp"
                          />
                        </p>
                      </span>
                    </span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </strong>
      </div>
      <strong></strong>
    </div>
    <strong></strong>
  </div>
  
        <article className="leaderboard1">
        <article className="leaderboard">
  <header>
    <h1 className="leaderboard__title">
      <span className="leaderboard__title--top">DOCUMENTS</span>
      <span className="leaderboard__title--bottom">uploaded</span>
    </h1>
  </header>
  <main className="leaderboard__profiles">


  {pdfFiles.map((file, index) => (

<a href="#" onClick={() => downloadFile(file.url)}>
<article className="leaderboard__profile">
<img
  src="data:image/png;base64,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"
  alt="Mark Zuckerberg"
  className="leaderboard__picture"
/>
<span className="leaderboard__name">
                    {file.name.split(".")[0]}
                    </span>
</article>
</a>


                


                ))}


    
  </main>
</article>
</article>
</body>
        
        </>

    );

}

export default Cocuments;