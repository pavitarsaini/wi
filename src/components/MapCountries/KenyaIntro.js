import React, {} from "react";
import "../../assets/stylesheets/MapChart/Countries.css"
import {Link} from "react-router-dom";

import KenyaIntro from "../Lottie/KenyaIntro"

const Kenya = () => {

    return (
        <div className="trails-main">
            <div className="trails-text">

                <KenyaIntro/>
                <Link to='/wi/kenya' className="travel fadeIn">travel</Link>

            </div>

        </div>
    );

}

export default Kenya