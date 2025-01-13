import React, { useState } from "react";
import InventoryComponent from "./humanDashboard/InventoryComponent";
import SkillsComponent from "./humanDashboard/SkillsComponent";

type HumanDashboardComponentProps = {
  player: PlayerType;
  inventory: ItemsInInventory | undefined;
  setInventory: React.Dispatch<React.SetStateAction<ItemsInInventory | undefined>>;
};

const HumanDashboardComponent: React.FC<HumanDashboardComponentProps> = ({ player, inventory, setInventory }) => {
  const [openInventory, setOpenInventory] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);

  return (
    <div className="HdashboardDiv">
      <div>
        <p>Health: {player.health}</p>
        <p>Mana: {player.mana}</p>
        <p>Attack: {player.attack}</p>
        <p>Gold: {player.gold}</p>
      </div>
      <div>
        <button onClick={() => setOpenSkills((prev) => !prev)}>Skills</button>
      </div>
      <div>
        <button onClick={() => setOpenInventory((prev) => !prev)}>Inventory</button>
      </div>
      {openInventory && <InventoryComponent setOpenInventory={setOpenInventory} inventory={inventory} setInventory={setInventory}/>}
      {openSkills && <SkillsComponent setOpenSkills={setOpenSkills}/>}
    </div>
  )
}

export default HumanDashboardComponent