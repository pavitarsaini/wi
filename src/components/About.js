import React, {Component} from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
class References extends Component {

    componentWillMount() {
        document.body.id = 'style-2';
    }

    render() {
        return (
            <div >

            <div id="outer">
                <div id="inner">
                <ScrollAnimation animateOnce animateIn="animate__fadeInDown">
                <div><div id="title-about">About</div></div>
                </ScrollAnimation>

                </div>
            </div>
            <div id="cont">
            <ScrollAnimation animateOnce animateIn="animate__fadeIn">
                <div id="heading-about">Created By: Pavitar Saini(2020)</div>
                <div id="heading-about2">For: World Issues(CGW4U1-01)</div>
                </ScrollAnimation>
   
                

            </div>

        </div>
        );
    }
}

export default References;