import React, { useState } from "react"
import LandingComponent from "./screenInterface/LandingComponent";
import PathChoicesComponent from "./screenInterface/PathChoicesComponent";

type ScreenInterfaceComponentProps = {
  player: PlayerType;
};

const ScreenInterfaceComponent: React.FC<ScreenInterfaceComponentProps> = ({player}) => {
  const [showlanding, setShowLanding] = useState(true);
  const [showPath, setShowPath] = useState(true);

  return (
    <div className="screenInterfaceDiv">
      {showlanding && <LandingComponent setShowLanding={setShowLanding} player={player}/>}
      {!showlanding && showPath && <PathChoicesComponent setShowPath={setShowPath}/>}

    </div>
  )
}

export default ScreenInterfaceComponent