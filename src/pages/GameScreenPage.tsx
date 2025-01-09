import React, { useEffect, useState } from "react"

import HumanDashboardComponent from "../components/gameScreen/HumanDashboardComponent";
import NoCharSelectedError from "../components/gameScreen/NoCharSelectedError";
import StoreDashboardComponent from "../components/gameScreen/StoreDashboardComponent";

type GameScreenPageProps = {
  selectedChar: CharSelectedType;
};

const GameScreenPage: React.FC<GameScreenPageProps> = ({ selectedChar }) => {
  const [openStore, setOpenStore] = useState(true)

  return (
    <div className="gameScreenDiv">
      {/* <NoCharSelectedError selectedChar={selectedChar} /> */}
      <div>

      </div>
      <div>
        show image

      </div>
      <div>
        show image

      </div>
      <div>
        {/* <HumanDashboardComponent selectedChar={selectedChar} /> */}
      </div>
      <StoreDashboardComponent openStore={openStore} setOpenStore={setOpenStore} />
    </div>
  )
}

export default GameScreenPage