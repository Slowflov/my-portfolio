import L from "leaflet"; // Импортируем библиотеку Leaflet
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import humanIcon from "../assets/human-icon.png"; // импортируем картинку

function MiniMap() {
    const [location, setLocation] = useState(null);
    const [showContent, setShowContent] = useState(false); // состояние для отображения всего контента

    useEffect(() => {
        // Проверка доступности геолокации
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }

        // Задержка в 3 секунды перед отображением контента
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3400);

        // Очищаем таймер при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-96 flex justify-center mb-10">
    <div className="w-[400px] h-72 rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-3xl">
        {showContent && location ? (
            <>
                <h1 className="text-2xl text-center mb-4">I'm here</h1>
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
            </>
        ) : null}
    </div>
</div>
    );
}

export default MiniMap;






