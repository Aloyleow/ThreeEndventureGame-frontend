import React, { useState } from "react"

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
  const [pulse, setPulse] = useState(false)


  return (
    <div className="game-screen-div" style={{animation: `${pulse && player.active ? "pulse 2s" : ""}`}}>
      <NoRoleSelectedError player={player} />
      <ScreenInterfaceComponent
        player={player}
        setPlayer={setPlayer}
        setOpenStore={setOpenStore}
        setPulse={setPulse}
      />
      <HumanDashboardComponent
        player={player}
        setPlayer={setPlayer}
      />
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