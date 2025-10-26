// MapAtLocation.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

// Fix default marker icon paths when bundling
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapAtLocation({
  LATITUDE,
  LONGITUDE
}: {
  LATITUDE: number;
  LONGITUDE: number;
}) {
  // REPLACE with the lat/lng you copied from your Google Maps link:
  const position: LatLngExpression = [LATITUDE, LONGITUDE]; // e.g., [44.4268, 26.1025]

  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        borderRadius: 12,
        overflow: "hidden"
      }}
    >
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom
      >
        <TileLayer
          // OpenStreetMap tiles (free). Please be kind with usage in production.
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position} icon={icon}>
          <Popup>Optima Dental Clinic</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
