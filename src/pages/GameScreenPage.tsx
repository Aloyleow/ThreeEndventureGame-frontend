import React, { useEffect, useState } from "react"

import HumanDashboardComponent from "../components/gameScreen/HumanDashboardComponent";
import StoreDashboardComponent from "../components/gameScreen/StoreDashboardComponent";
import NoRoleSelectedError from "../components/gameScreen/NoRoleSelectedError";

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
  const [openStore, setOpenStore] = useState(true)
  const [inventory, setInventory] = useState<ItemsInInventory | undefined>()
  const [level, setLevel] = useState(1)

  return (
    <div className="gameScreenDiv">
      <NoRoleSelectedError player={player} />
      <div>

      </div>
      <div>
        show image

      </div>
      <div>
        show image

      </div>
      <div>
        {/* <HumanDashboardComponent player={player} /> */}
      </div>
      <StoreDashboardComponent openStore={openStore} setOpenStore={setOpenStore} level={level} player={player} setInventory={setInventory} inventory={inventory}/>
    </div>
  )
}

export default GameScreenPage