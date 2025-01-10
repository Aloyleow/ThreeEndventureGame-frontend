import React, { useState } from "react";

type HumanDashboardComponentProps = {
  player: PlayerType;
};

const HumanDashboardComponent: React.FC<HumanDashboardComponentProps> = ({ player }) => {
  const [stats, setCurrentStats] = useState<PlayerType>(player);
  


  return (
    <div className="HdashboardDiv">
      <div>
        <p>Health: {stats.health}</p>
        <p>Mana: {stats.mana}</p>
        <p>Attack: {stats.attack}</p>
        <p>Gold: {stats.gold}</p>
      </div>
      <div>

      </div>
    
    </div>
  )
}

export default HumanDashboardComponent