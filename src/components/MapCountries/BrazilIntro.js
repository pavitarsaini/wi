import React, {} from "react";
import "../../assets/stylesheets/MapChart/Countries.css"

import {Link} from "react-router-dom";

import AmazonIntro from "../Lottie/AmazonIntro"

const BrazilIntro = () => {


        return (
            <div className="trails-main">
            <div className="trails-text">
           

                <AmazonIntro/>
                <Link to='/wi/kenya' className="travel fadeIn">travel</Link>

            </div>

        </div>
        );
    }


export default BrazilIntro;