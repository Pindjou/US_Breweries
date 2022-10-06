import React from 'react';
import Plot from 'react-plotly.js';
export default function Map(props){
    const mapBoxToken="pk.eyJ1IjoidmljdG9yaWVubmFjZXIiLCJhIjoiY2w3Z3A5eGQxMDZqZjNvcDBzMm1taXloYiJ9.z1Tp05JwlVD-e5JXLtgL7g";
    const data =props.markers;
      
    const layout = {
        autosize: true,
        hovermode:'closest',
        mapbox: {
          bearing:0,
          center: {
            lat:45,
            lon:-73
          },
          pitch:0,
          zoom:1
        },
      }
      
      
      const config = {mapboxAccessToken:mapBoxToken};
    return (
        <Plot
          data={data}
          layout={layout}
          config={config}
        />
      );
}