import React from "react";

type InventoryComponentProps = {
  setOpenInventory: React.Dispatch<React.SetStateAction<boolean>>;
  inventory: ItemsInInventory | undefined;
  setInventory: React.Dispatch<React.SetStateAction<ItemsInInventory | undefined>>;
};

const InventoryComponent: React.FC<InventoryComponentProps> = ({ setOpenInventory, inventory, setInventory }) => {

  return (
    <div className="storeToastBackground">
      <div>
        <h3>Inventory</h3>
      </div>
      <div>
      {inventory?.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.cost}g</p>
          <p>-{item.description}</p>
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