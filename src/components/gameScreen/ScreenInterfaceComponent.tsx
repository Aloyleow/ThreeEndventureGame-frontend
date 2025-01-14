import React, { useState } from "react"
import LandingComponent from "./screenInterface/LandingComponent";
import PathChoicesComponent from "./screenInterface/PathChoicesComponent";
import FightComponent from "./screenInterface/FightComponent";
import DeathComponent from "./screenInterface/DeathComponent";
import AnomalyLoseComponent from "./screenInterface/AnomalyLoseComponent";
import AnomalyWinComponent from "./screenInterface/AnomalyWinComponent";

type ScreenInterfaceComponentProps = {
  player: PlayerType;
  level: number;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const pathPlaceHolder = {
  pathId: 0,
  pathName: "",
  encounter: {
    enemy: false,
    name: "",
    health: 0,
    attack: 0,
    gold: 0,
  }
}

const ScreenInterfaceComponent: React.FC<ScreenInterfaceComponentProps> = ({ player, level, setPlayer }) => {
  const [showlanding, setShowLanding] = useState(true);
  const [showPaths, setShowPaths] = useState(true);
  const [showFight, setShowFight] = useState(false);
  const [showDeath, setShowDeath] = useState(false);
  const [showAnoVictory, setShowAnoVictory] = useState(false);
  const [showAnoLost, setShowAnoLost] = useState(false);
  const [currentPath, setCurrentPath] = useState<SelectedPath>(pathPlaceHolder)

  return (
    <div className="screenInterfaceDiv">
      {showlanding &&
        <LandingComponent
          setShowLanding={setShowLanding}
          player={player}
        />}
      {!showlanding && showPaths &&
        <PathChoicesComponent
          player={player}
          setShowPaths={setShowPaths}
          setShowFight={setShowFight}
          setCurrentPath={setCurrentPath}
          level={level}
        />}
      {!showlanding && !showPaths && showFight &&
        <FightComponent
          player={player}
          setPlayer={setPlayer}
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
          setShowDeath={setShowDeath}
          setShowFight={setShowFight}
          setShowPaths={setShowPaths}
          setShowAnoVictory={setShowAnoVictory}
          setShowAnoLost={setShowAnoLost}
        />}
      {!showlanding && !showPaths && !showFight && showDeath &&
        <DeathComponent/>
      }
      {!showlanding && !showPaths && !showFight && showAnoLost &&
        <AnomalyLoseComponent/>
      } 
      {!showlanding && !showPaths && !showFight && showAnoVictory &&
        <AnomalyWinComponent/>
      }  
    </div>
  )
}

export default ScreenInterfaceComponent