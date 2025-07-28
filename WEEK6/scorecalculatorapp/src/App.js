import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore name="Ashley" school="Sunrise High School" total={460} goal={5} />
    </div>
  );
}

export default App;

