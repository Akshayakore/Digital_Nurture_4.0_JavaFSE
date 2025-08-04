import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Rohit', 'Gill', 'Dhoni', 'Kuldeep', 'Pant'];
  const evenTeam = ['Virat', 'Hardik', 'Bumrah', 'Shami', 'Ashwin'];

  const [t20, ranji] = [
    ['Player1', 'Player2'],
    ['Player3', 'Player4'],
  ];

  const merged = [...t20, ...ranji];

  return (
    <div>
      <h2>Odd Team</h2>
      <ul>{oddTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Even Team</h2>
      <ul>{evenTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>{merged.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
