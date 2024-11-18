import React from 'react'
import styled from 'styled-components'
import MapView, { Geojson } from 'react-native-maps';

export default function MapSection() {
  const geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": { "name": "Vietnam" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [102.0, 0.0],
              [103.0, 1.0],
              [104.0, 0.0],
              [103.0, -1.0],
              [102.0, 0.0]
            ]
          ]
        }
      }
    ]
  };

  return (
    <MapView style={{ flex: 1 }}>
      <Geojson
        geojson={geojson}
        strokeColor="red"
        fillColor="rgba(255, 0, 0, 0.5)"
        strokeWidth={2}
      />
    </MapView>
  );
}


const MainLayout = styled.View`

`
