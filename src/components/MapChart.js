import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { Spring, config } from 'react-spring/renderprops';
import { useTransition, animated } from "react-spring";
import "./test.css"
const geoPaths = ["./mapdata/world.json", "./mapdata/kenya.json"];

const highlighted = [
  "KEN",
  "CAN"
];

class MapChart extends Component {
  constructor() {
    super();
  this.state = {
    detail: false,
    paths: geoPaths[0],
    center: [0, 0],
    zoom: 1,
    bypass: false,
  };
  this.changeCenter = this.changeCenter.bind(this)
    this.handleMoveEnd = this.handleMoveEnd.bind(this)
}  

  handleGeographyClick = (geography, projection, path) => event => {

    const centroid = projection.invert(path.centroid(geography));

    const { detail } = this.state;
    this.setState({
      paths: detail ? geoPaths[0] : geoPaths[1],
      center: detail ? [0, 0] : centroid,
      zoom: detail ? 1 : 10,
      detail: !detail
    });
    console.log(geography)
  };

  changeCenter = (center) => () => {
    this.setState({ center })
  }

  handleMoveEnd(newCenter) {
    console.log(newCenter)
    this.setState({ 
                    center: newCenter.coordinates,
                    zoom: newCenter.zoom
                  })    
  }

  render() {
    return (
      <div>
        
  
          
            <div>
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
            <div className="controls">
            <button className="btn" onClick={this.changeCenter([0, 0])}>
              Center
            </button>
          </div>
          </div>
         
        
      </div>
    );
  }
}

export default MapChart;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
