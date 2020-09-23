import React from "react";
import vdo from "./video-2.mp4";
import "./Banner.css";
import ReactPlayer from "react-player";

function Banner() {
  return (
    <>
      <div className="container py-4">
        <div className="banner-container pt-3">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="content">
                <h1 className="text-left">Wonderful Travel</h1>
                <p>
                  Add awesome everlasting moments to your life to cherish get
                  your tours planned and customised.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <ReactPlayer url={vdo} playing={true} width="100%" height="400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
