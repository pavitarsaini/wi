import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

import { useTransition, useTrail, animated as a } from "react-spring";
import "../../assets/stylesheets/CountryPages/KenyaPage.css"
import "../../assets/stylesheets/CountryPages/Common.css"
class Kenya extends Component {

  componentWillMount(){
    document.body.id = 'style-2';
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
  <div id="paragraph">For many in East Africa, this drought is the worst ever. 
                      In a number of ways the <a>situation today is worse than the 2010 to 2011 food crisis</a>
                      , which affected millions and resulted in a famine that killed more than 250,000 people. 
                      We are now in the <a>third year of very low rainfall,</a> coupled with high temperatures, 
                      which have exhausted people’s ability to go through another shock

  </div>
      </div>
    );
  }
}
export default Kenya;