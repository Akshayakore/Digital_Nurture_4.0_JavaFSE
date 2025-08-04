import React from 'react';

const SyntheticEventDemo = () => {
  const handleClick = (e) => {
    alert("I was clicked!");
    console.log("Synthetic Event:", e);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default SyntheticEventDemo;
