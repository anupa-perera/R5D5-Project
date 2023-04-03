import React, { useState } from "react";
import PlayerComparisonCard from "./PlayerComparisonCard";
import PlayerDatabase from "./PlayerDatabase";

const PlayerComparison: React.FC = () => {
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);

  const handlePlayer1Change = (player: Player) => {
    setPlayer1(player);
  };

  const handlePlayer2Change = (player: Player) => {
    setPlayer2(player);
  };

  const players = PlayerDatabase.getPlayers();

  return (
    <div>
      <h1>Player Comparison</h1>
      <div>
        <select onChange={(e) => handlePlayer1Change(players[e.target.value])}>
          <option>Select Player 1</option>
          {players.map((player, index) => (
            <option key={player.id} value={index}>
              {player.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => handlePlayer2Change(players[e.target.value])}>
          <option>Select Player 2</option>
          {players.map((player, index) => (
            <option key={player.id} value={index}>
              {player.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {player1 && player2 && (
          <>
            <PlayerComparisonCard player={player1} />
            <PlayerComparisonCard player={player2} />
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerComparison
