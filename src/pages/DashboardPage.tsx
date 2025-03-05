import { Typography, Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import DashboardLayout from "./DashboardLayout";

// Data titik lokasi di Bandung
const locations = [
  { id: 1, lat: -6.914744, lng: 107.609810, name: "Alun-Alun Bandung" },
  { id: 2, lat: -6.903449, lng: 107.618782, name: "Gedung Sate" },
  { id: 3, lat: -6.895395, lng: 107.640471, name: "Trans Studio Bandung" },
  { id: 4, lat: -6.874959, lng: 107.573207, name: "Dusun Bambu" },
];

// Icon Marker Kustom
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Ganti dengan URL icon lain jika perlu
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Peta Perangkat di Bandung</Typography>
        <MapContainer
          center={[-6.914744, 107.609810] as L.LatLngExpression}
          zoom={12}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {locations.map((location) => (
            <Marker key={location.id} position={[location.lat, location.lng]} icon={customIcon as L.Icon}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </DashboardLayout>
  );
};

export default DashboardPage;
