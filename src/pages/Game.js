import React, { useEffect, useState, useCallback } from "react";
import { getGameState } from "../api/gameState";
import { ErrorToast } from "../components/ErrorToast";

const Game = () => {
  const [gameState, setGameState] = useState({});
  const [error, setError] = useState(null);

  const getGameStateData = useCallback(async () => {
    const { gameStateData, error } = await getGameState(
      "http://localhost:4001/"
    );

    error !== null ? setError(error) : setGameState(gameStateData);
  }, []);

  useEffect(() => {
    getGameStateData();
  }, [getGameStateData]);

  const onToastClose = () => {
    setError(null);
  };

  return (
    <div>
      <h1>The Game/Home Page!</h1>
      <div>
        <pre>{JSON.stringify(gameState, null, 2)}</pre>
      </div>
      <ErrorToast
        errorMsg={error ? error.message : ""}
        onToastClose={onToastClose}
      />
    </div>
  );
};

export default Game;
