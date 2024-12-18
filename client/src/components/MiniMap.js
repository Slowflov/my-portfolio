// MiniMap.js
import L from "leaflet"; // Импортируем библиотеку Leaflet
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import humanIcon from "../assets/human-icon.png"; // импортируем картинку

function MiniMap() {
    // Установите статичные координаты
    const location = {
        latitude: 45.7772, // координаты Клермон-Феррана
        longitude: 3.0870
    };

    return (
        <div className="w-full h-96 flex justify-center mb-10">
            <div className="w-[400px] h-[242px] mt-[32px] rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-3xl">
                <h1 className="text-2xl text-center text-customWhiteblue mb-[18px] font-semibold">I'm here</h1>
                <MapContainer
                    center={[location.latitude, location.longitude]}
                    zoom={5}
                    className="w-full h-full rounded-lg"
                    zoomControl={false}
                    scrollWheelZoom={false}
                    attributionControl={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker
                        position={[location.latitude, location.longitude]}
                        icon={L.icon({
                            iconUrl: humanIcon,
                            iconSize: [30, 30],
                            iconAnchor: [15, 30],
                            popupAnchor: [0, -30],
                        })}
                    />
                </MapContainer>
            </div>
        </div>
    );
}
export default MiniMap