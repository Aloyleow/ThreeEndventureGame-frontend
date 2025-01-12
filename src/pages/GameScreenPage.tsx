import React, { useEffect, useState } from "react"

import HumanDashboardComponent from "../components/gameScreen/HumanDashboardComponent";
import StoreDashboardComponent from "../components/gameScreen/StoreDashboardComponent";
import NoRoleSelectedError from "../components/gameScreen/NoRoleSelectedError";
import ScreenInterfaceComponent from "../components/gameScreen/ScreenInterfaceComponent";

type ItemsInInventory = {
  name: string;
  cost: number;
  description: string;
}[];

type GameScreenPageProps = {
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const GameScreenPage: React.FC<GameScreenPageProps> = ({ player, setPlayer }) => {
  const [openStore, setOpenStore] = useState(false)
  const [inventory, setInventory] = useState<ItemsInInventory | undefined>()
  const [level, setLevel] = useState(1)

  return (
    <div className="gameScreenDiv">
      <NoRoleSelectedError player={player} />
      <div className="gameScreenNavBar">

      </div>
      <div>
        <ScreenInterfaceComponent player={player}/>
      </div>
      <div>
        <HumanDashboardComponent
          player={player}
          inventory={inventory}
          setInventory={setInventory}
        />
      </div>
      <StoreDashboardComponent
        openStore={openStore}
        setOpenStore={setOpenStore}
        level={level}
        player={player}
        inventory={inventory}
        setInventory={setInventory}
      />
    </div>
  )
}

export default GameScreenPage