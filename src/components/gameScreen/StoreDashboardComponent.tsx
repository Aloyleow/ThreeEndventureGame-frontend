import React, { useEffect, useState } from "react";
import storeItems from "../../services/storeItemsService";

type ItemsInStock = {
  levelId: number;
  name: string;
  cost: number;
  description: string;
}[];

type ItemSelected = {
  name: string;
  cost: number;
  description: string;
}

type Level = {
  level: number
}

type StoreDashboardComponentProps = {
  openStore: boolean;
  setOpenStore: React.Dispatch<React.SetStateAction<boolean>>;
  player: PlayerType;
  inventory: ItemsInInventory | undefined;
  setInventory: React.Dispatch<React.SetStateAction<ItemsInInventory | undefined>>;
};

const StoreDashboardComponent: React.FC<StoreDashboardComponentProps> = ({ openStore, setOpenStore, player, setInventory, inventory }) => {
  const [itemsInStock, setItemsInStock] = useState<ItemsInStock | undefined>();
  const [cart, setCart] = useState<ItemSelected>({
    name: "",
    cost: 0,
    description: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [showError, setShowError] = useState(false);
  const [buyError, setbuyError] = useState("")

  useEffect(() => {

    const showItemsInStock = async (currentlevel: Level) => {

      try {

        const checkItemsInStock: ItemsInStock = await storeItems(currentlevel);
        setItemsInStock(checkItemsInStock);

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

    showItemsInStock({ level: level });
  }, [level]);

  const handleOnClickItem = (item: ItemSelected) => {
    setCart({
      name: item.name,
      cost: item.cost,
      description: item.description
    });
    setShowToast(true);
  }

  const handleOnBuy = () => {
    if (!cart) {
      setbuyError("Item not in cart, client error");
      setShowError(true);
    }
    if (player.gold < cart.cost) {
      setbuyError("Not enough gold !!")
      setShowError(true);
    }

    setInventory([...inventory || [], cart])
    setShowToast(false)
  }

  return (
    <>
      {openStore &&
        <div className="storeToastBackground">
          <div>
            <h3>ThreeEnd Store</h3>
          </div>
          <div>
            {itemsInStock?.map((obj, index) => (
              <div key={index} onClick={() => { handleOnClickItem(obj) }}>
                <p>{obj.name}</p>
                <p>{obj.cost}g</p>
                <p>-{obj.description}</p>
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => setOpenStore(false)} className="buttonsNavigate">Close shop</button>
          </div>
          {showToast &&
            <div className="storeToast">
              <div>
                <p>{cart.name}</p>
                <p>{cart.cost}</p>
                <p>{cart.description}</p>
              </div>
              <div>
                {showError && <h3>{buyError}</h3>}
              </div>
              <div>
                <button
                  onClick={() => handleOnBuy()}
                  className="buttonsNavigate"
                >Buy</button>
                <button
                  onClick={() => {
                    setShowError(false)
                    setShowToast(false)
                  }}
                  className="buttonsNavigate"
                >Close</button>
              </div>
            </div>
          }
        </div>}
    </>
  )
}

export default StoreDashboardComponent