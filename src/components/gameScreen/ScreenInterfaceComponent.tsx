import React, { useState } from "react"
import LandingComponent from "./screenInterface/LandingComponent";

type ScreenInterfaceComponentProps = {
  player: PlayerType;
};

const ScreenInterfaceComponent: React.FC<ScreenInterfaceComponentProps> = ({player}) => {
  const [landing, setLanding] = useState(true);

  return (
    <div className="screenInterfaceDiv">
      {landing && <LandingComponent setLanding={setLanding} player={player}/>}

    </div>
  )
}

export default ScreenInterfaceComponent