import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import { Spring, config } from 'react-spring/renderprops';

const geoPaths = ["/world.json", "/ch.json"];

class MapChart extends Component {
  state = {
    detail: false,
    paths: geoPaths[0],
    center: [0, 0],
    zoom: 1
  };
  switchPaths = (a, b, c) => {
    const { detail } = this.state;
    this.setState({
      paths: detail ? geoPaths[0] : geoPaths[1],
      center: detail ? [0, 0] : [8, 47],
      zoom: detail ? 1 : 10,
      detail: !detail
    });
  };

  render() {
    return (
      <div>
        <Spring
          from={{ zoom: 1 }}
          to={{ zoom: this.state.zoom }}
          config={config.gentle}
        >
          {(styles) => (
            <ComposableMap style={{ width: "100%", height: "auto" }}>
              <ZoomableGroup center={this.state.center} zoom={styles.zoom}>
                <Geographies geography={this.state.paths}>
                  {({ geographies, proj }) =>
                    geographies.map((geo, i) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        projection={proj}
                        onClick={this.switchPaths}
                        style={{
                          default: {
                            fill: "#D6D6DA",
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
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Spring>
      </div>
    );
  }
}

export default MapChart;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
