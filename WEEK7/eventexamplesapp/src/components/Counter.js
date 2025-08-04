import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert('Hello! Counter updated.');
  };

  const decrease = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
    </div>
  );
};

export default Counter;
