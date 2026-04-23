import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

// Coordenadas corretas — Empresarial Park Sul, Matias Barbosa/MG
const position: [number, number] = [-21.83655132480363, -43.380299735998285];

const MapComponent = () => (
    <MapContainer
        center={position}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        dragging={false}
        {...({} as any)}
    >
        <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            {...({} as any)}
        />
        <Marker position={position}>
            <Tooltip permanent {...({} as any)}>
                Rodovia BR 040 Número 64, 13B<br />
                Empresarial Park Sul, Matias Barbosa, MG
            </Tooltip>
        </Marker>
    </MapContainer>
);

export default MapComponent;
