import React, { useState, useEffect } from "react"
import gamePath from "../../../services/gamePathService";

type GamePath = {
  pathId: number;
  pathName: string;
  encounter: {
    enemy: boolean;
    name: string;
    health: number;
    attack: number;
    gold: number;
  }
}[];

type PathChoicesComponentProps = {
  player: PlayerType;
  setShowPaths: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFight: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPath: React.Dispatch<React.SetStateAction<SelectedPath>>;
  setOpenStore: React.Dispatch<React.SetStateAction<boolean>>;
};

const PathChoicesComponent: React.FC<PathChoicesComponentProps> = ({ player, setShowFight, setShowPaths, setCurrentPath, setOpenStore }) => {
  const [pathChoices, setPathChoices] = useState<GamePath>();

  useEffect(() => {

    const loadPathChoices = async (monsters: string[]) => {

      try {

        const checkGamePaths: GamePath = await gamePath({ monsterKilled: monsters });
        setPathChoices(checkGamePaths);

      } catch (error) {

        if (error instanceof TypeError) {
          console.error("Server Error, please contact admin");
        } else if (error instanceof Error) {
          console.error(`${error.message}`);
        } else {
          console.error("Client Error");
        }
      }

    }

    loadPathChoices(player.pathtaken)

  }, [player])

  const handleOnPathSelect = (path: SelectedPath) => {
    setCurrentPath(path);
    setShowPaths(false);
    setShowFight(true);
  };


  return (
    <div className="path-choice-div">
      <h3>Select your path...</h3>
      <div>
        {pathChoices?.map((obj, index) => (
          <div key={index}>
            <button onClick={() => handleOnPathSelect(obj)} className="buttonsGame"><p>{obj.pathName}</p></button>
          </div>
        ))}
      </div>
      <div>
        <button className="buttonsNavigate" onClick={() => setOpenStore(true)}>Three End Shop</button>
      </div>

    </div>
  )
}

export default PathChoicesComponent