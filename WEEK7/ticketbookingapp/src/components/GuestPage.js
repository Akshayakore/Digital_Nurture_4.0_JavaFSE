import React from 'react';

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Please log in to book tickets.</p>
      <h3>Available Flights:</h3>
      <ul>
        <li>Bangalore ✈️ Delhi - ₹3000</li>
        <li>Chennai ✈️ Mumbai - ₹2500</li>
      </ul>
    </div>
  );
};

export default GuestPage;
