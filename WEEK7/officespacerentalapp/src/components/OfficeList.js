import React from 'react';

const OfficeList = () => {
  const offices = [
    {
      name: 'WeWork Prestige',
      rent: 45000,
      address: 'MG Road, Bengaluru',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: '91Springboard',
      rent: 65000,
      address: 'Koramangala, Bengaluru',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'CoWrks',
      rent: 80000,
      address: 'RMZ Ecoworld, Bengaluru',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div>
      <h2>Office Spaces Available</h2>
      {offices.map((office, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{office.name}</h3>
          <img src={office.image} alt={office.name} />
          <p>Address: {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;
