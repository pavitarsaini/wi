import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import { useTransition, useTrail, animated as a } from "react-spring";
import "../../assets/stylesheets/MapChart/Countries.css"
import {Link} from "react-router-dom";

import KenyaIntro from "../Lottie/KenyaIntro"


const Kenya = (props) => {

  return (
    <div className="trails-main">
      <div className="trails-text">
      
      <KenyaIntro/>
      <Link to='/kenya' className="travel fadeIn">travel</Link>

      </div>
      
    </div>
  );

}

export default Kenya