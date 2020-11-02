import React, {Component} from "react";
import "../../assets/stylesheets//MapChart/Countries.css"
import "../../assets/stylesheets//MapChart/IDNIntro.css"
import {Link} from "react-router-dom";

class BrazilIntro extends Component {

    render() {
        return (
            <div>
                <div className="tittle fadeIn">Amazon</div>
                <div className="te">
                <span>C</span><span>S</span><span>S</span><span>&nbsp;</span><span>S</span><span>m</span><span>o</span><span>k</span><span>y</span><span>&nbsp;</span><span>T</span><span>e</span><span>x</span><span>t</span><span>&nbsp;</span><span>E</span><span>f</span><span>f</span><span>e</span><span>c</span><span>t</span>


                </div>
                <Link to='wi/brazil' className="IDNtravel fadeInSlow">travel</Link>
            </div>
        );
    }
}

export default BrazilIntro;