import React, { Component, useRef, useState, useEffect, useCallback } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { useTransition, useTrail, animated as a } from "react-spring";
import "../assets/stylesheets/MapChart/MapChart.css"

import KanyaIntro from "./MapCountries/KenyaIntro"
import IDNIntro from "./MapCountries/IDNIntro"
import CaliIntro from "./MapCountries/CaliIntro"

const ZOOM = 0.85;
const CENTER = [13, -33]; 
const geoPaths = ["./mapdata/world.json", "./mapdata/kenya.json", "./mapdata/idn.json", "./mapdata/cali.json"];

var countriesList = [
  { name: 'KEN', center: [48.084867983159704, -3.282589099070572], zoom: 8, path: geoPaths[1] },
  { name: 'IDN', center: [151.25483468761988, -15.26125385186716], zoom: 2.378414230005443, path: geoPaths[2] },
  { name: 'USA', center: [-105.66381951282006, 33.150487064940826], zoom: 8, path: geoPaths[3] }
];

const highlighted = [
  "KEN",
  "CAN",
  "IDN",
  "USA"
];

class MapChart extends Component {
  constructor() {
    super();
  this.state = {
    detail: false,
    paths: geoPaths[0],
    center: CENTER,
    zoom: ZOOM,
    bypass: false,
  };
  
    this.centerMap = this.centerMap.bind(this)
    this.handleMoveEnd = this.handleMoveEnd.bind(this)
}  

componentDidMount () {
  document.body.id = 'MAIN';
}

getCountryInfo(uid) {
    var countries = countriesList.filter(function(country) {
        return country.name === uid;});

    if(countries.length > 0) {
        return countries[0];
    }else return { center: CENTER, zoom: ZOOM, paths: geoPaths[0]}
}

  handleGeographyClick = (geography, projection, path) => event => {

    var info = this.getCountryInfo(geography.properties.ISO3);
    //console.log(info)
    
    var centroid= info.center
    var zoom= info.zoom
    path = info.path

    const { detail } = this.state;
    this.setState({
      paths: detail ? geoPaths[0] : path,
      center: detail ? CENTER : centroid,
      zoom: detail ? ZOOM : zoom,
      detail: !detail
    });
    console.log(geography)
  };

  centerMap = () => () => {
    this.setState({ center: CENTER })
  }

  handleMoveEnd(newCenter) {
    console.log(newCenter)
    this.setState({ center: newCenter.coordinates,zoom: newCenter.zoom})}

  render() {
    return (
      <div className="MAIN">
            <ComposableMap style={{ width: "100%", height: "100%" }} >
              <ZoomableGroup 
            onMoveEnd={this.handleMoveEnd} className={"test"} center={this.state.center} zoom={this.state.zoom}>
                <Geographies geography={this.state.paths}>
                  {({ geographies, projection, path }) =>
                  
                    geographies.map((geo, i) => {
                      const isHighlighted =
                      highlighted.indexOf(geo.properties.ISO3) !== -1;
                      return (
                      <Geography
                      className={"test2"}
                        key={geo.rsmKey}
                        geography={geo}
                        projection={projection}
                        onClick={this.handleGeographyClick(geo, projection, path)}
                        fill={isHighlighted ? "#82FF9E" : "#fff"}
                        style={{
                          default: {
                            outline: "none"
                          },
                          hover: {
                            //opacity:0.8,
                            fill: "#F53",
                            outline: "none"
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none"
                          }
                        }}
                      />
                      );
                      })
                  }
                </Geographies>
              </ZoomableGroup>
              
            </ComposableMap>
            {
       this.state.paths == geoPaths[0] &&
            <div className="controls">
            <button className="btn" onClick={this.centerMap()}>
              Center
            </button>
          </div>
          }
          {
       this.state.paths == geoPaths[1] &&
           <div className="controls2"><KanyaIntro data={this.state}/></div>
          }
          {
       this.state.paths == geoPaths[2] &&
           <div className="controls2"><IDNIntro data={this.state}/></div>
          }
          {
       this.state.paths == geoPaths[3] &&
           <div className="controls2"><CaliIntro data={this.state}/></div>
          }
      </div>
    );
  }
}

export default MapChart;