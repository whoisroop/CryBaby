import React, { useEffect, useState } from 'react'
import '../css/predict.css'

// FIREBASE:
import Storage from "./firebase";
import { ref, uploadBytes,listAll, getDownloadURL } from "firebase/storage";

const Predict = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [predictV, setPredictV] = useState(null);

  useEffect(()=>{
    console.log("Fetching...");
    fetch("/api").then(response => response.json()).then(data => console.log(data));
    setPredictV(null);
  }, []);

  const getPrediction = () => {
    console.log("Fetching...");
    fetch("/predict").then(response => response.json()).then(data => {console.log(data); setPredictV(data.value)});
  }

  const uploadFile = () => {
    if(fileUpload == null){
        alert("No audio file selected.");
        return;
    }

    const fileref = ref(Storage, "/cry/cry.wav")

    uploadBytes(fileref, fileUpload).then(()=>{
        alert("Audio Uploaded!");
        getPrediction();
    }).catch((err)=>{
        console.log(err);
    });
  }

  return (
    <>
    {/* {predictV && <h1> {predictV} </h1>}
    <div className="btn" onClick={getPrediction}>Click</div> */}
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          {/* 16:9 aspect ratio */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Video Modal End */}
  {/* Header Start */}
  <div
    className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
    id="home"
    style={{ minHeight: "100vh" }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
          <img
            className="img-fluid w-100 rounded-circle shadow-sm"
            src=""
            alt=""
          />
        </div>
        <div className="col-lg-7 text-center text-lg-left">
          <h3 className="text-white font-weight-normal mb-3" />
          <h1
            className="display-3 text-uppercase text-primary mb-2"
            style={{ WebkitTextStroke: "2px #ffffff" }}
          >
            {predictV == null ? "Cry-Baby" : predictV}
          </h1>
          <h1 className="typed-text-output d-inline font-weight-lighter text-white" />
          <div className="typed-text d-none">
            Machine Learning, Detect &amp; Classify, React - Flask - TensorFlow,
            Infant-Cry Detect
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
            <label htmlFor="file" className="btn btn-outline-light mr-5">
              Upload Audio
            </label>
            <input
            onChange={(event)=>{
              setFileUpload(event.target.files[0]);
              console.log(event.target.files[0].name)
            }}
              type="file"
              name="file"
              id="file"
              style={{ display: "none" }}
            />
            <button type="button" className="btn-play" data-src="#" onClick={uploadFile}></button>
            <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">
              Analyze Audio
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Footer Start */}
  <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
    <div className="container text-center py-5">
      <div className="d-flex justify-content-center mb-4">
        <a className="btn btn-light btn-social mr-2" href="#">
          <i className="fab fa-twitter" />
        </a>
        <a className="btn btn-light btn-social mr-2" href="#">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="btn btn-light btn-social mr-2" href="#">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="btn btn-light btn-social" href="#">
          <i className="fab fa-instagram" />
        </a>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <a className="text-white" href="#">
          Privacy
        </a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">
          Terms
        </a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">
          FAQs
        </a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">
          Help
        </a>
      </div>
      <p className="m-0">
        ©{" "}
        <a className="text-white font-weight-bold" href="#">
          Domain Name
        </a>
        . All Rights Reserved. Designed by IIIT SURAT{" "}
        <a className="text-white font-weight-bold" href="https://htmlcodex.com">
          HTML Codex
        </a>
      </p>
    </div>
  </div>
  {/* Footer End */}
  {/* Scroll to Bottom */}
  <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom" />
  {/* Back to Top */}
  <a href="#" className="btn btn-outline-dark px-0 back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
</>
  )
}

export default Predict
