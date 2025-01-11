import React from "react";

import ExistingSessionError from "../components/gameMenu/ExistingSessionError";
import GameMenuComponent from "../components/gameMenu/GameMenuComponent";

const versionNotes: string = "V1.9.0 Imagine the graphics";

type GameMenuPageProps = {
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const GameMenuPage: React.FC<GameMenuPageProps> = ({ setPlayer }) => {

  return (

    <div className="gameMenuPageDiv">
      <GameMenuComponent/>
      <div className="gmVnotesDiv">
        <p>{versionNotes}</p>
      </div>
      <ExistingSessionError setPlayer={setPlayer} />
    </div>

  )
};

export default GameMenuPage