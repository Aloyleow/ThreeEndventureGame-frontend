
import GameMenuComponent from "../components/gameMenu/GameMenuComponent";

const versionNotes: string = "V1.9.0 Imagine the graphics";

const GameMenuPage = () => {

  return (

    <div className="gameMenuPageDiv">
      <GameMenuComponent/>
      <div className="gmVnotesDiv">
        <p>{versionNotes}</p>
      </div>
      
    </div>

  )
};

export default GameMenuPage