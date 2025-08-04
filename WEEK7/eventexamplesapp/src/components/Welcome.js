import React from 'react';

const Welcome = () => {
  const sayMessage = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <button onClick={() => sayMessage("Welcome to the event app!")}>
        Say Welcome
      </button>
    </div>
  );
};

export default Welcome;
