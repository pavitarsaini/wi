import React, {Component} from "react";
import "../../assets/stylesheets//MapChart/Countries.css"
import "../../assets/stylesheets//MapChart/IDNIntro.css"
import "../../assets/stylesheets//MapChart/AtlanticIntro.css"

import {Link} from "react-router-dom";

class AtlanticIntro extends Component {

    render() {
        return (
            <div>
                <div className="tittle fadeIn">Atlantic</div>
                <div id="texte">
                    <span id="L">H</span>
                    <span id="I">U</span>
                    <span id="G">R</span>
                    <span id="H">R</span>
                    <span id="T">I</span>
                    <span id="T">C</span>
                    <span id="T">A</span>
                    <span id="T">N</span>
                    <span id="T">E</span>
                    <span id="T">S</span>
                </div>
                <Link to='wi/atlantic' className="BRAtravel fadeIn">travel</Link>
            </div>
        );
    }
}

export default AtlanticIntro;