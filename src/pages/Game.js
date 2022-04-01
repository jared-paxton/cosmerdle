import React, { useState, useEffect } from "react";
import { fetchGameState } from "../api/gameState";
import { ErrorToast } from "../components/ErrorToast";
import { useQuery } from "react-query";
import Cookies from "js-cookie";

const Game = () => {
  //const [userID, setUserID] = useState(null);

  const { isLoading, isError, data, error } = useQuery(
    "gameState",
    fetchGameState
  );

  if (!isError) {
    //setUserID(Cookies.get("userID"));
    const userID = Cookies.get("userID");
    console.log("userID:", userID);
  }

  console.log(data);

  return (
    <div>
      <h1>The Game/Home Page!</h1>
      {isLoading && <div>Loading...</div>}
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <ErrorToast errorMsg={isError ? error.message : ""} />
    </div>
  );
};

export default Game;
