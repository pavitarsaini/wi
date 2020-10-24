import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import { useTransition, useTrail, animated as a } from "react-spring";
import "../../assets/stylesheets//MapChart/Countries.css"
import "../../assets/stylesheets//MapChart/IDNIntro.css"
import {Link} from "react-router-dom";

class IDNIntro extends Component {

  render() {
    return (
      <div>
        <div className="tittle fadeIn">Jarakrata</div>
      <div className="loading2 wave2 fadeIn">
      Sea level rise

</div>
<Link to='/idn' className="IDNtravel fadeInSlow">travel</Link>
</div>
    );
  }
}

export default IDNIntro;