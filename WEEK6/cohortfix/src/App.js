import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div className="App">
      <CohortDetails name="React May 2025" status="ongoing" />
      <CohortDetails name="Java April 2025" status="completed" />
    </div>
  );
}

export default App;
