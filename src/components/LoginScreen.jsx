import React, { useEffect, useState } from 'react';

const LoggedInListings = ({ user }) => {
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

  const handleDelete = (businessId) => {
    const updatedBusinesses = businesses.filter((business) => business.id !== businessId);
    setBusinesses(updatedBusinesses);
  };

  return (
    <div>
      <h2>Logged In Listings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Operating Hours</th>
            {user && <th>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {businesses.map((business) => (
            <tr key={business.id}>
              <td>{business.name}</td>
              <td>{business.description}</td>
              <td>{business.address}</td>
              <td>{business.operatingHours}</td>
              {user && (
                <td>
                  <button onClick={() => handleDelete(business.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoggedInListings;
