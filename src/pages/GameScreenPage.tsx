import React, { useEffect, useState } from "react"

import HumanDashboardComponent from "../components/gameScreen/HumanDashboardComponent";
import NoCharSelectedError from "../components/gameScreen/NoCharSelectedError";
import StoreDashboardComponent from "../components/gameScreen/StoreDashboardComponent";

type GameScreenPageProps = {
  player: PlayerType;
};

const GameScreenPage: React.FC<GameScreenPageProps> = ({ player }) => {
  const [openStore, setOpenStore] = useState(true)

  return (
    <div className="gameScreenDiv">
      <NoCharSelectedError player={player} />
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
      <StoreDashboardComponent openStore={openStore} setOpenStore={setOpenStore} />
    </div>
  )
}

export default GameScreenPage