import React from "react";

import ExistingSessionError from "../components/gameMenu/ExistingSessionError";
import GameMenuComponent from "../components/gameMenu/GameMenuComponent";

const versionNotes: string = "V1.9.0 Imagine the graphics";

type GameMenuPageProps = {
  setSelectedChar: React.Dispatch<React.SetStateAction<CharSelectedType | undefined>>;
};

const GameMenuPage: React.FC<GameMenuPageProps> = ({ setSelectedChar }) => {

  return (

    <div className="gameMenuPageDiv">
      <GameMenuComponent/>
      <div className="gmVnotesDiv">
        <p>{versionNotes}</p>
      </div>
      <ExistingSessionError setSelectedChar={setSelectedChar} />
    </div>

  )
};

export default GameMenuPage