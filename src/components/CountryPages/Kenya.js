import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

import { useTransition, useTrail, animated as a } from "react-spring";
import "../../assets/stylesheets/CountryPages/KenyaPage.css"

class Kenya extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height};
  }

  componentWillMount(){
    document.body.id = 'style-2';
    this.setState({height: window.innerHeight + 'px'});
  }

  render() {
    return (
      <div id="style-2"> 

                
        <div id="outer">
        <div id="inner">
  <div id="title">KENYA DROUGHTS</div>
  <div id="heading">the problem</div>
  
  </div>
  </div>

  <div id="outer">
  <div id="inner">
  <div id="paragraph">For many in East Africa
  </div>
</div>
</div>
      </div>
    );
  }
}
export default Kenya;