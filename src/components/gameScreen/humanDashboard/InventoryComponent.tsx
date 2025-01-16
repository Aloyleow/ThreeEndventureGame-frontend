import React from "react";

type Item = {
  numPath: number;
  name: string;
  cost: number;
  description: string;
  properties: {
    attack: number;
    health: number;
    mana: number;
    maxhealth: number;
    maxmana: number;
  }
};

type InventoryComponentProps = {
  setOpenInventory: React.Dispatch<React.SetStateAction<boolean>>;
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const InventoryComponent: React.FC<InventoryComponentProps> = ({ setOpenInventory, player, setPlayer }) => {

  // const handleOnUse = (item: Item) => {
  //   const totalMH = player.maxhealth + item.properties.maxhealth;
  //   const totalMM = player.maxmana + item.properties.maxmana;
  //   const adjustedHealth = player.health + item.properties.health;
  //   const adjustedMana = player.maxmana + item.properties.maxmana;
  //   const adjustedAttack = player.attack + item.properties.attack;

  //   const filterItems = (prevItems: PlayerType) => {
  //     const inventoryItemIdx = prevItems.items.findIndex((playerItems) => playerItems === item.name)
  //     if (inventoryItemIdx !== -1){
  //       return [...prevItems.items.slice(0, inventoryItemIdx), ...prevItems.items.slice(inventoryItemIdx + 1)];
  //     }
  //     return prevItems.items;
  //   };

  //   const filterInventory = (inv: ItemsResponse) => {
  //     const inventoryItemIdx = inv.findIndex((invItem) => invItem.name === item.name)
  //     if (inventoryItemIdx !== -1){
  //       return [...inv.slice(0, inventoryItemIdx), ...inv.slice(inventoryItemIdx + 1)];
  //     }
  //     return inv;
  //   };

  //   setPlayer({
  //     ...player,
  //     health: adjustedHealth > totalMH ? player.maxhealth : adjustedHealth,
  //     maxhealth: totalMH,
  //     mana: adjustedMana > totalMM ? player.maxmana : adjustedMana,
  //     maxmana: totalMM,
  //     attack: adjustedAttack,
  //     items: filterItems(player)
  //   })
  //   setInventory(filterInventory(inventory))
  // }

  return (
    <div className="gameToastDiv">
      <div>
        <h3>Inventory</h3>
      </div>
      <div className="inventoryDiv">
      {inventory.map((item, index) => (
        <div key={index} className="invItemDiv">
          <p>{item.name}</p>
          <p>{item.cost}g</p>
          <p>-{item.description}</p>
          <button onClick={() => handleOnUse(item)}>Use</button>
        </div>
      ))}
      </div>
      <div>
        <button className="buttonsNavigate" onClick={() => setOpenInventory((prev) => !prev)}>Close</button>
      </div>  
    </div>
  )
}

export default InventoryComponent