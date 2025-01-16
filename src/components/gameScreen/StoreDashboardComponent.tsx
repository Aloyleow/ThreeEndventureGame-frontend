import React, { useEffect, useState } from "react";
import storeItems from "../../services/storeItemsService";

type Cart = {
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
}

type StoreDashboardComponentProps = {
  openStore: boolean;
  setOpenStore: React.Dispatch<React.SetStateAction<boolean>>;
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const StoreDashboardComponent: React.FC<StoreDashboardComponentProps> = ({ openStore, setOpenStore, player, setPlayer }) => {
  const [itemsInStock, setItemsInStock] = useState<ItemsResponse>();
  const [cart, setCart] = useState<Cart>({
    numPath: 0,
    name: "",
    role: "",
    cost: 0,
    description: "",
    properties: {
      attack: 0,
      health: 0,
      mana: 0,
      maxhealth: 0,
      maxmana: 0,
    }
  });
  const [showToast, setShowToast] = useState(false);
  const [showError, setShowError] = useState(false);
  const [buyError, setbuyError] = useState("")

  useEffect(() => {

    const showItemsInStock = async () => {

      try {

        const checkItemsInStock: ItemsResponse = await storeItems({ pathTaken: player.pathtaken.length });
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

    showItemsInStock();
  }, [player.pathtaken]);

  const handleOnClickItem = (item: Cart) => {
    setCart(item);
    setShowToast(true);
  }

  const handleOnBuy = () => {
    if (!cart) {
      setbuyError("Item not in cart, client error");
      setShowError(true);
      return;
    }
    if (player.gold < cart.cost) {
      setbuyError("Not enough gold !!")
      setShowError(true);
      return;
    }

    setPlayer((prev) => ({
      ...prev,
      gold: prev.gold - cart.cost,
      items: [
        ...prev.items,
        cart.name
      ]
    }));
    setItemsInStock((prev) => prev?.filter((item) => item.name !== cart.name))
    setShowToast(false);
  };
  console.log(player.items)

  return (
    <>
      {openStore &&
        <div className="toastyToastBackground">
          <div className="gameToastDiv">
            <div>
              <h3>ThreeEnd Store</h3>
            </div>
            <div className="storeDisplayDiv">
              {itemsInStock?.map((obj, index) => (
                <div key={index}>
                  <div className="itemDescripDiv">
                    <h4>{obj.name}</h4>
                    <p>{obj.cost}g</p>
                    <p>-{obj.description}</p>
                  </div>
                  <div>
                    <button onClick={() => { handleOnClickItem(obj) }}>Buy</button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button onClick={() => setOpenStore(false)} className="buttonsNavigate">Close shop</button>
            </div>
            {showToast &&
              <div className="cartToast">
                <div className="cartDisplay">
                  <div>
                    <h4>{cart.name}</h4>
                    <p>{cart.cost}</p>
                    <p>{cart.description}</p>
                    <div>
                      {showError && <h3>{buyError}</h3>}
                    </div>
                  </div>
                  <div>
                    <h4>Properties</h4>
                    {cart.properties.attack !== 0 ? <p>Attack: {cart.properties.attack}</p> : null}
                    {cart.properties.health !== 0 ? <p>Health: {cart.properties.health}</p> : null}
                    {cart.properties.maxhealth !== 0 ? <p>Max Health: {cart.properties.maxhealth}</p> : null}
                    {cart.properties.mana !== 0 ? <p>Mana: {cart.properties.mana}</p> : null}
                    {cart.properties.maxmana !== 0 ? <p>Max Mana: {cart.properties.maxmana}</p> : null}
                  </div>
                </div>

                <div className="cartButtonDiv">
                  <button
                    onClick={() => handleOnBuy()}
                  >Buy</button>
                  <button
                    onClick={() => {
                      setShowError(false)
                      setShowToast(false)
                    }}
                  >Close</button>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </>
  )
}

export default StoreDashboardComponent