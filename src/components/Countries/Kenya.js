import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import { useTransition, useTrail, animated as a } from "react-spring";
import "../../assets/stylesheets/MapChart/Countries.css"
import * as easings from 'd3-ease'

const items = ["Kenya", "Droughts"];
const config = { mass: 5, tension: 2000, friction: 200, duration: 1000, easing: easings.easeCubic  };

const Kenya = (props) => {

    console.log("hey")
    console.log(props.data)
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 1000,
    
  });

  return (
    <div className="trails-main">
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div 
            key={items[index]}
            className=""
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
          >
            {(index == 0 && (
              <a.div className="trails-text" style={{ height }}>
                {items[index]}
              </a.div>
            )) || (
              <div classNam="cont">
              <a.div className="trails-text2" style={{ height }}>
                {items[index]}
              </a.div>
              <div classNam="cont">
              <button className="travel" >travel</button>
              </div>
              </div>
            )}
          </a.div>
        ))}
      </div>
    </div>
  );

}

export default Kenya