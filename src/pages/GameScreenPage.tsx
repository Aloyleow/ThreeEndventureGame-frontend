import React, { useEffect, useState } from "react"

import HumanDashboardComponent from "../components/gameScreen/HumanDashboardComponent";
import StoreDashboardComponent from "../components/gameScreen/StoreDashboardComponent";
import NoRoleSelectedError from "../components/gameScreen/NoRoleSelectedError";
import ScreenInterfaceComponent from "../components/gameScreen/ScreenInterfaceComponent";

type GameScreenPageProps = {
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const GameScreenPage: React.FC<GameScreenPageProps> = ({ player, setPlayer }) => {
  const [openStore, setOpenStore] = useState(false)
  

  return (
    <div className="gameScreenDiv">
      <NoRoleSelectedError player={player} />
      <div className="gameScreenNavBar">

      </div>
      <div>
        <ScreenInterfaceComponent
          player={player}
          setPlayer={setPlayer}
          setOpenStore={setOpenStore}
        />
      </div>
      <div>
        <HumanDashboardComponent
          player={player}
          setPlayer={setPlayer}
        />
      </div>
      <StoreDashboardComponent
        openStore={openStore}
        setOpenStore={setOpenStore}
        player={player}
        setPlayer={setPlayer}
      />
    </div>
  )
}

export default GameScreenPage