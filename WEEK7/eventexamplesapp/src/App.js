import React from 'react';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import SyntheticEventDemo from './components/SyntheticEventDemo';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>🧪 React Event Examples</h1>
      <Counter />
      <Welcome />
      <SyntheticEventDemo />
      <CurrencyConverter />
    </div>
  );
}

export default App;
