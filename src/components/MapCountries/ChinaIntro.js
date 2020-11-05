import React, {Component} from "react";
import "../../assets/stylesheets//MapChart/Countries.css"
import "../../assets/stylesheets//MapChart/CaliIntro.css"
import {Link} from "react-router-dom";

class ChinaIntro extends Component {

    componentDidMount() {
        var video = document.getElementById("my-video");

        //video.playbackRate = 0.5;


    }

    render() {
        return (
            <div>

                <video className="video2" id="my-video" autoPlay loop>
                    <source src="./video/melt.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>

                <div className="help3 fadeIn">CHINA</div>
                <Link to='/wi/china' className="China fadeIn">travel</Link>
            </div>
        );
    }
}

export default ChinaIntro;