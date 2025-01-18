import React, { useState } from "react"
import LandingComponent from "./screenInterface/LandingComponent";
import PathChoicesComponent from "./screenInterface/PathChoicesComponent";
import FightComponent from "./screenInterface/FightComponent";
import DeathComponent from "./screenInterface/DeathComponent";
import AnomalyLoseComponent from "./screenInterface/AnomalyLoseComponent";
import AnomalyWinComponent from "./screenInterface/AnomalyWinComponent";

type ScreenInterfaceComponentProps = {
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  setOpenStore: React.Dispatch<React.SetStateAction<boolean>>;
  setPulse: React.Dispatch<React.SetStateAction<boolean>>;
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

const ScreenInterfaceComponent: React.FC<ScreenInterfaceComponentProps> = ({ player, setPlayer, setOpenStore, setPulse }) => {
  const [showlanding, setShowLanding] = useState(true);
  const [showPaths, setShowPaths] = useState(true);
  const [showFight, setShowFight] = useState(false);
  const [showDeath, setShowDeath] = useState(false);
  const [showAnoVictory, setShowAnoVictory] = useState(false);
  const [showAnoLost, setShowAnoLost] = useState(false);
  const [currentPath, setCurrentPath] = useState<SelectedPath>(pathPlaceHolder)

  return (
    <div className="screen-interface-div">
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
          setOpenStore={setOpenStore}
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
          setPulse={setPulse}
          
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