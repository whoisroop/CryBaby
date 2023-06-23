import React,{useEffect, useState} from 'react'
import '../css/tutorial.css'
const api ="AIzaSyAErNktXHazSpjpMxEzihYFLP4ewJG5qm4"

const topic = "sleeping"

const fetch_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=5&q=${topic}&key=${api}`


function Tutorial() {
  let vidid="", vidlink="";
  const [allvideo, setallvideo] = useState([])

  useEffect(()=>{
    fetch(fetch_url).then((response)=>response.json()).then((resjson)=>{
      const result = resjson.items.map(doc => ({
        ...doc,
        videolink: "https://www.youtube.com/embed/"+doc.id.videoId
      }))
      setallvideo(result)
    })
  },[])

  console.log(allvideo[0])
  if(allvideo[0]){
    vidid = allvideo[0].id.videoId
    vidlink = "https://www.youtube.com/embed/"+vidid
  }
  console.log(vidid)

  

  return (
    <div>
    
      <iframe src={vidlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Tutorial
