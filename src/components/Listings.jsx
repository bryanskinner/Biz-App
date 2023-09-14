import React, { useState, useEffect } from 'react';

const Listing = () => {
  
  const [businesses, setBusinesses] = useState([]);

  
  useEffect(() => {
    
    const mockData = [
      {
        id: 1,
        name: 'Business 1',
        description: 'This is Business 1, providing great products.',
        address: '123 Main St, City, State',
        operatingHours: '9:00 AM - 5:00 PM',
      },
      {
        id: 2,
        name: 'Business 2',
        description: 'Business 2 offers a variety of services.',
        address: '456 Elm St, City, State',
        operatingHours: '10:00 AM - 6:00 PM',
      },
      {
        id: 3,
        name: 'Business 3',
        description: 'Visit Business 3 for a unique experience.',
        address: '789 Oak St, City, State',
        operatingHours: '8:00 AM - 4:00 PM',
      },
      {
        id: 4,
        name: 'Business 4',
        description: 'Explore Business 4 and discover something new.',
        address: '101 Pine St, City, State',
        operatingHours: '11:00 AM - 7:00 PM',
      },
    ];

    
    setBusinesses(mockData);
  }, []);

  return (
    <div>
      <h2>Small Businesses</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Operating Hours</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td>{business.name}</td>
              <td>{business.description}</td>
              <td>{business.address}</td>
              <td>{business.operatingHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;

