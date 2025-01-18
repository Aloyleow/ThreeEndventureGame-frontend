import React from "react";
import GameMenuComponent from "../components/gameMenu/GameMenuComponent";

const versionNotes: string = "V1.9.0 Imagine the graphics";

type GameMenuPageProps = {
  setOpenInstructions: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameMenuPage: React.FC<GameMenuPageProps> = ({ setOpenInstructions }) => {

  return (
    <div className="game-menu-div">
      <GameMenuComponent setOpenInstructions={setOpenInstructions}/>
      <div className="game-versionnotes-div">
        <p>{versionNotes}</p>
      </div>
    </div>
  )
};

export default GameMenuPage