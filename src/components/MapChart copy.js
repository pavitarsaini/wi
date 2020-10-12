import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import {geoEquirectangular} from "d3-geo";
import '../assets/stylesheets/App.css'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const markers = [
  { coordinates: [3.3792, 6.5244] },
  { coordinates: [139.6917, 35.6895] },
  { coordinates: [-74.0721, 4.711] },
  { coordinates: [-118.2437, 34.0522] }
]

const  MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 170 }} width={980}
   height={551} style={{width: "100%",height: "auto" }}>
        <ZoomableGroup center={[ 10, -10]}>
          <Geographies geography={geoUrl}>
            {({ geographies}) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    //const { NAME, POP_EST } = geo.properties;
                    //setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    //setTooltipContent("");
                  }}
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
          {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#F00"
          onMouseEnter={() => {setTooltipContent('hey')}}  onMouseLeave={() => {setTooltipContent("")}}/>
        </Marker>
      ))}
        </ZoomableGroup>
         
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
