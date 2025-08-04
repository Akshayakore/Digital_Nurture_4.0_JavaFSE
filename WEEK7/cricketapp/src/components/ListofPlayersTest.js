import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 65 },
    { name: 'Gill', score: 72 },
    { name: 'Hardik', score: 80 },
    { name: 'Dhoni', score: 50 },
    { name: 'Jadeja', score: 95 },
    { name: 'Bumrah', score: 40 },
    { name: 'Kuldeep', score: 75 },
    { name: 'Shami', score: 85 },
    { name: 'Pant', score: 68 },
    { name: 'Ashwin', score: 60 },
  ];

  const highScorers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with score ≥ 70</h2>
      <ul>
        {highScorers.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
