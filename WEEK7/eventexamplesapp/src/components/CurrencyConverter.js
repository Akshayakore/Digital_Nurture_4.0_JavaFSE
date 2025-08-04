import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const convertToEuro = (e) => {
    e.preventDefault();
    const euro = (parseFloat(rupees) / 90).toFixed(2);
    setEuros(euro);
  };

  return (
    <div>
      <h2>INR to Euro Converter</h2>
      <form onSubmit={convertToEuro}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euros && <p>€ {euros}</p>}
    </div>
  );
};

export default CurrencyConverter;
