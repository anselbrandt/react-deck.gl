import React from "react";
import DeckGL from "@deck.gl/react";
import { PathLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

interface Props {}

const INITIAL_VIEW_STATE = {
  longitude: -73.645,
  latitude: 45.56,
  zoom: 11,
  pitch: 0,
  bearing: -57.5,
};

const data = [
  {
    path: [
      [-73.964792, 45.413806],
      [-73.587076, 45.503546],
      [-73.48159, 45.701829],
    ],
    name: "Montreal",
  },
];

export const Map: React.FC<Props> = () => {
  const layers = [
    new PathLayer({
      id: "path-layer",
      data,
      pickable: true,
      widthScale: 20,
      widthMinPixels: 2,
      getPath: (d: any) => d.path,
      getColor: (d) => [70, 130, 180],
      getWidth: (d) => 5,
    }),
  ];
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <StaticMap
        width="100%"
        height="100%"
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
};
