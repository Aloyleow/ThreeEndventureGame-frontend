import React, { useEffect, useState } from "react";
import { inventoryItems, applyItemStats } from "../../../services/inventoryServices";

type Item = {
  numPath: number;
  name: string;
  role: string;
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

type PlayeritemsData = {
  item: {
    numPath: number;
    name: string;
    role: string;
    cost: number;
    description: string;
    properties: {
      attack: number;
      health: number;
      mana: number;
      maxhealth: number;
      maxmana: number;
    }
  },
  items: string[];
  role: string;
  attack: number;
  maxhealth: number;
  maxmana: number;
  health: number;
  mana: number;
};

type PlayerNewData = {
  items: string[];
  attack: number;
  maxhealth: number;
  maxmana: number;
  health: number;
  mana: number;
}

type InventoryComponentProps = {
  setOpenInventory: React.Dispatch<React.SetStateAction<boolean>>;
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const InventoryComponent: React.FC<InventoryComponentProps> = ({ setOpenInventory, player, setPlayer }) => {
  const [inventory, setInventory] = useState<ItemsResponse>([])

  useEffect(() => {

    const showItemsInInventory = async () => {

      try {
        console.log(player.items)

        const checkItemsInStock: ItemsResponse = await inventoryItems({ items: player.items });
        setInventory(checkItemsInStock);

      } catch (error) {

        if (error instanceof TypeError) {
          console.error("Server Error, please contact admin");
        } else if (error instanceof Error) {
          console.error(`${error.message}`);
        } else {
          console.error("Client Error");
        }
      }
    };

    showItemsInInventory();
  }, [player])

  const handleOnUse = async (item: Item) => {

    const playerItemData: PlayeritemsData = {
      item: item,
      items: player.items,
      role: player.role,
      attack: player.attack,
      maxhealth: player.maxhealth,
      maxmana: player.maxmana,
      health: player.health,
      mana: player.mana,
    }
    try {
      const playerDataRes: PlayerNewData = await applyItemStats(playerItemData)
      setPlayer({
        ...player,
        items: playerDataRes.items,
        health: playerDataRes.health,
        mana: playerDataRes.mana,
        maxhealth: playerDataRes.maxhealth,
        maxmana: playerDataRes.maxmana,
        attack: playerDataRes.attack
      })

    } catch (error) {

      if (error instanceof TypeError) {
        console.error("Server Error, please contact admin");
      } else if (error instanceof Error) {
        console.error(`${error.message}`);
      } else {
        console.error("Client Error");
      }
    }
  };

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