import React from 'react'

function Map() {

  var map = L.map('map').setView([51.505, -0.09], 13);

  return (
    <div>
      <div id="map"></div>
    </div>
  )
}

export default Map