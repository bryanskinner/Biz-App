import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ apiKey }) => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 0, lng: 0 }} 
        defaultZoom={10} 
      >

      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
