import React, { useState } from "react";

type HumanDashboardComponentProps = {
  player: PlayerType;
};

const HumanDashboardComponent: React.FC<HumanDashboardComponentProps> = ({ player }) => {
  
  return (
    <div className="HdashboardDiv">
      <div>
        <p>Health: {player.health}</p>
        <p>Mana: {player.mana}</p>
        <p>Attack: {player.attack}</p>
        <p>Gold: {player.gold}</p>
      </div>
      <div>
        Skills
      </div>
      <div>
        {/* {player.items?.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))} */}
      </div>
      <div>
        Fight
      </div>
    </div>
  )
}

export default HumanDashboardComponent