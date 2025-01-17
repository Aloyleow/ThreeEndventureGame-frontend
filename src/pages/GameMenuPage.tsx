
import GameMenuComponent from "../components/gameMenu/GameMenuComponent";

const versionNotes: string = "V1.9.0 Imagine the graphics";

const GameMenuPage = () => {

  return (
    <div className="game-menu-div">
      <GameMenuComponent/>
      <div className="game-versionnotes-div">
        <p>{versionNotes}</p>
      </div>
      
    </div>
  )
};

export default GameMenuPage