import React, { useState } from "react";
import InventoryComponent from "./humanDashboard/InventoryComponent";

type HumanDashboardComponentProps = {
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  
};

const HumanDashboardComponent: React.FC<HumanDashboardComponentProps> = ({ player, setPlayer }) => {
  const [openInventory, setOpenInventory] = useState(false);
  

  return (
    <div className="human-dashboard-div">
      <div>
        <p>Health: {player.health}/{player.maxhealth}</p>
        <p>Mana: {player.mana}/{player.maxmana}</p>
        <p>Attack: {player.attack}</p>
        <p>Gold: {player.gold}</p>
      </div>
      <div className="hd-button-div">
        <button onClick={() => setOpenInventory((prev) => !prev)} className="buttons-selection">Inventory</button>
      </div>
      {openInventory && <InventoryComponent setOpenInventory={setOpenInventory} player={player} setPlayer={setPlayer}/>}
    </div>
  )
}

export default HumanDashboardComponent