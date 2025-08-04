import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your flight tickets.</p>
      <h3>Available Flights:</h3>
      <ul>
        <li>Bangalore ✈️ Delhi - ₹3000 <button>Book</button></li>
        <li>Chennai ✈️ Mumbai - ₹2500 <button>Book</button></li>
      </ul>
    </div>
  );
};

export default UserPage;
