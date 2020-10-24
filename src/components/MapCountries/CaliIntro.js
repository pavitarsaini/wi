import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import { useTransition, useTrail, animated as a } from "react-spring";
import "../../assets/stylesheets//MapChart/Countries.css"
import "../../assets/stylesheets//MapChart/CaliIntro.css"
import {Link} from "react-router-dom";

class CaliIntro extends Component {

    componentDidMount () {
        var video = document.getElementById("my-video");

        video.addEventListener("ended", function () {
            video.currentTime = 3.0;
            video.play();
    }, false);
    }

  render() {
    return (
      <div>
        
      <div className="test">
      
      <video id="my-video" autoPlay>
  <source src="./video/fire.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>

</div>
<div className="help fadeIn">CALIFORINA</div>
<Link to='/idn' className="CALItravel fadeInSlow">travel</Link>
</div>
    );
  }
}

export default CaliIntro;