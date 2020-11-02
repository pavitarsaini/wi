import React, {Component} from "react";
import "../../assets/stylesheets//MapChart/Countries.css"
import "../../assets/stylesheets//MapChart/CaliIntro.css"
import {Link} from "react-router-dom";

class CaliIntro extends Component {

    componentDidMount() {
        var video = document.getElementById("my-video");

        //video.playbackRate = 0.5;

        video.addEventListener("ended", function () {
            video.currentTime = 3.0;
            video.play();
        }, false);
    }

    render() {
        return (
            <div>

                <video className="video" id="my-video" autoPlay>
                    <source src="./video/fire.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                <div className="help fadeIn">CALIFORINA</div>
                <Link to='/wi/califorina' className="CALItravel fadeInSlow">travel</Link>
            </div>
        );
    }
}

export default CaliIntro;