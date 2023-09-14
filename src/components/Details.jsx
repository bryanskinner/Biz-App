import React from 'react';
import GoogleMapReact from 'google-map-react';

const Details = () => {
  
  const googleMapsApiKey = 'AIzaSyCcb_6ZEojwije1CEVteNl6h6IFWbDnvW0';

  const mapCenter = {
    lat: 0, 
    lng: 0, 
  };

  return (
    <div>
      <h2>Business Details</h2>

      
      <div>
        <h3>Business Name</h3>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Address: 123 Main St, City, State</p>
        <p>Operating Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
      </div>


      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={mapCenter}
          defaultZoom={15} 
        >

          <Marker
            lat={mapCenter.lat}
            lng={mapCenter.lng}
            text="Business Location"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};


const Marker = ({ text }) => (
  <div style={{ color: 'red', fontWeight: 'bold' }}>
    {text}
  </div>
);

export default Details;
