import { MapContainer, Marker, Popup, TileLayer, useMap,Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import { markerIcon } from './MapIcons';
import EventCard from "../../EventCard";
const position = [37.9838, 23.7275];
let places = [
  {
    
    title: "Athens",
    position: [37.9838, 23.7275],
  },
  {
     
    title: "Thessaloniki",
    position: [40.6401, 22.9444],
  },
  {
    
    title: "Kavala",
    position: [40.9414, 24.4014],
  },
];

function MapView() {
  return (
    
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={false}
      style={{ height: "50vh", width: "70%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map((place) => {
        return (
          <Marker
            key={place.id}
            position={place.position}
            icon={markerIcon}
          >
              <Tooltip>{place.title}</Tooltip>
          </Marker>
        );
      })}
    </MapContainer>
    
  );
}

export default MapView;
