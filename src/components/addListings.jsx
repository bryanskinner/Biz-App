import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addListing } from './actions/listingActions';

const AddListingPage = ({ user, addListing }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    operatingHours: '',
  });

  const [mapUrl, setMapUrl] = useState('');
  useEffect(() => {
    const addressForMap = encodeURIComponent(formData.address);
    const googleMapsUrl = `https://maps.google.com/maps?q=${addressForMap}`;
    setMapUrl(googleMapsUrl);
  }, [formData.address]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
    addListing({

      name: formData.name,
      description: formData.description,
      address: formData.address,
      operatingHours: formData.operatingHours,
    });

    setFormData({
      name: '',
      description: '',
      address: '',
      operatingHours: '',
    });
  };

  return (
    <div>
      <h2>Add a New Business Listing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="operatingHours">Operating Hours:</label>
          <input
            type="text"
            name="operatingHours"
            id="operatingHours"
            value={formData.operatingHours}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Save Listing</button>
        </div>
      </form>
      
      {formData.address && (
        <div>
          <h3>Business Location</h3>
          <iframe
            title="Business Location"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src={mapUrl}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  addListing,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListingPage);
