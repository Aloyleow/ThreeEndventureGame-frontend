import React from "react";
import ExistingSessionComponent from "../components/gameMenu/ExistingSessionComponent";
import GameMenuComponent from "../components/gameMenu/GameMenuComponent"

const versionNotes: string = "V1.9.0 Imagine the graphics"

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
      <ExistingSessionComponent setSelectedChar={setSelectedChar} />
    </div>

  )
};

export default GameMenuPage