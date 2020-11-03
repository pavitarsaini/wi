import React, {Component} from "react";
import "../../assets/stylesheets//MapChart/Countries.css"
import "../../assets/stylesheets//MapChart/IDNIntro.css"
import {Link} from "react-router-dom";

class IDNIntro extends Component {

    render() {
        return (
            <div>
                <div className="tittle fadeIn">Jakarta</div>
                <div className="loading2 wave2 fadeIn">
                    Sea level rise

                </div>
                <Link to='/wi/jakarta' className="IDNtravel fadeInSlow">travel</Link>
            </div>
        );
    }
}

export default IDNIntro;