import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../stateManagement/MyContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Maps() {

  const {ip, setIp, position} = useContext(MyContext);

  
  if (!ip || !ip.location || !ip.location.lat || !ip.location.lng) {
    return <div>Loading...</div>;
  }
  console.log([ip.location.lat, ip.location.lng])
  return (
    <MapContainer key={ip.ip} center={[ip.location.lat, ip.location.lng]} zoom={16} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ip.location.lat, ip.location.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Maps