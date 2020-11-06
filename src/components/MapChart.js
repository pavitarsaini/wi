import React, { Component} from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import "../assets/stylesheets/MapChart/MapChart.css"
import {Link} from "react-router-dom";

import KanyaIntro from "./MapCountries/KenyaIntro"
import IDNIntro from "./MapCountries/IDNIntro"
import CaliIntro from "./MapCountries/CaliIntro"
import BrazilIntro from "./MapCountries/BrazilIntro"
import AtlanticIntro from "./MapCountries/AtlanticIntro"
import ChinaIntro from "./MapCountries/ChinaIntro"
import Kenya from "./MapCountries/KenyaIntro";
import Landing from "./Landing"

const ZOOM = 0.85;
const CENTER = [13, -33]; 
const geoPaths = [require('../assets/mapdata/world.json'), require('../assets/mapdata/kenya.json'), require('../assets/mapdata/idn.json'), require('../assets/mapdata/cali.json'), require('../assets/mapdata/atlantic.json'), require('../assets/mapdata/brazil.json'), require('../assets/mapdata/china.json'),];

var countriesList = [
  { name: 'KEN', center: [48.084867983159704, -3.282589099070572], zoom: 8, path: geoPaths[1] },
  { name: 'IDN', center: [151.25483468761988, -15.26125385186716], zoom: 2.378414230005443, path: geoPaths[2] },
  { name: 'USA', center: [-105.66381951282006, 33.150487064940826], zoom: 8, path: geoPaths[3] },
  { name: 'CAN', center: [-45.72607712940721, 45.89266728625843], zoom: 6.727171322029718, path: geoPaths[4] },
  { name: 'BRA', center: [-19.44438681578761, -26.426482730216705], zoom: 2.4041630560342613, path: geoPaths[5] },
  { name: 'CHN', center: [128.21565326847065, 21.818627562100048], zoom: 2.4041630560342617, path: geoPaths[6] }
];

const highlighted = [
  "KEN",
  "CAN",
  "IDN",
  "USA",
  "BRA",
  "CHN"
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
    this.land = React.createRef(); 
    this.centerMap = this.centerMap.bind(this)
    this.handleMoveEnd = this.handleMoveEnd.bind(this)
}  



componentDidMount() {
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
                        //onClick={this.handleGeographyClick(geo, projection, path)}
                        fill={isHighlighted ? "#82FF9E" : "#fff"}
                        onClick={isHighlighted || this.state.paths !== geoPaths[0]? this.handleGeographyClick(geo, projection, path) : null}
                        style={{
                          default: {
                            outline: "none"
                          },
                          hover: {
                            //opacity:0.8,
                            transition: "0.3s",
                            fill: "#F53",
                            outline: "none"
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none"
                          }
                        }}

                        style={isHighlighted || this.state.paths !== geoPaths[0]? {
                          default: {
                            outline: "none"
                          },
                          hover: {
                            transition: "0.3s",
                            fill: "#F53",
                            outline: "none"
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none"
                          }
                        } : {
                          default: {
                            outline: "none"
                          },
                          hover: {
                            transition: "0.3s",
                            fill: "#fff",
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
       this.state.paths === geoPaths[0] &&
            <div className="controls">
             <Link to='/wi/references' className="travel0" onClick={this.centerMap()}>
             References
            </Link>
            <Link to='/wi/about' className="traveler" onClick={this.centerMap()}>
             About
            </Link>
          </div>
          }
          {
       this.state.paths === geoPaths[1] &&
       
           <div className="controls2"><KanyaIntro data={this.state}/></div>
          }
          {
       this.state.paths === geoPaths[2] &&
           <div className="controls2"><IDNIntro data={this.state}/></div>
          }
          {
       this.state.paths === geoPaths[3] &&
           <div className="controls2"><CaliIntro data={this.state}/></div>
          }
          {
       this.state.paths === geoPaths[4] &&
           <div className="controls2"><AtlanticIntro data={this.state}/></div>
          }
          {
       this.state.paths === geoPaths[5] &&
           <div className="controls2"><BrazilIntro data={this.state}/></div>
          }
          {
       this.state.paths === geoPaths[6] &&
           <div className="controls2"><ChinaIntro data={this.state}/></div>
          }
      </div>
    );
  }
}

export default MapChart;