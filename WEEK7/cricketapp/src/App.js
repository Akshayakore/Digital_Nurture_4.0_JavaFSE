import React from 'react';
import ListofPlayers from './components/ListofPlayersTest';  // updated path

console.log("ListofPlayers:", ListofPlayers);  // ✅ should show: ƒ ListofPlayers()

function App() {
  return (
    <div className="App">
      <h1>Hello Test App</h1>
      <ListofPlayers />
    </div>
  );
}

export default App;
