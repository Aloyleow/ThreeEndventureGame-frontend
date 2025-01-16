import React, { useState } from "react";
import InventoryComponent from "./humanDashboard/InventoryComponent";
import SkillsComponent from "./humanDashboard/SkillsComponent";

type HumanDashboardComponentProps = {
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  
};

const HumanDashboardComponent: React.FC<HumanDashboardComponentProps> = ({ player, setPlayer }) => {
  const [openInventory, setOpenInventory] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);

  return (
    <div className="HdashboardDiv">
      <div>
        <p>Health: {player.health}/{player.maxhealth}</p>
        <p>Mana: {player.mana}/{player.maxmana}</p>
        <p>Attack: {player.attack}</p>
        <p>Gold: {player.gold}</p>
      </div>
      <div>
        <button onClick={() => setOpenSkills((prev) => !prev)} className="buttonsGame">Skills</button>
      </div>
      <div>
        <button onClick={() => setOpenInventory((prev) => !prev)} className="buttonsGame">Inventory</button>
      </div>
      {openInventory && <InventoryComponent setOpenInventory={setOpenInventory} player={player} setPlayer={setPlayer}/>}
      {openSkills && <SkillsComponent setOpenSkills={setOpenSkills}/>}
    </div>
  )
}

export default HumanDashboardComponent