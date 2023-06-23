import React, { useState } from "react";
import countVideo from "../Videos/count.mp4"

const Rhymes = () => {
    const videoPlay = () => {
        var vid = document.getElementsByTagName("video")[0];
        vid.play();
    }

    const videoPause = () => {
        var vid = document.getElementsByTagName("video")[0];
        vid.pause();
    }

    return (
        <div>
            {
                <>
                <body>
                <div class="container-fluid">
                <center>
                <video width="75%" height="75%" class="mb-10" style={{borderRadius: "25px"}}>
                    <source src={countVideo} type="video/mp4" />
                </video>
                </center>
                </div>

                <div class="container">
                    <center>
                        <button type="button" class="btn btn-primary mr-3" onClick={videoPlay}>Play</button>
                        <button type="button" class="btn btn-danger ml-3 mr-3" onClick={videoPause}>Pause</button>
                    </center>
                </div>

                </body>
                </>
            }
        </div>
    );
}

export default Rhymes;