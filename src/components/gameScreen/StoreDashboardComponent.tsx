import React, { useEffect, useState } from "react";
import storeItems from "../../services/storeItemsService";

type ItemsInStock = {
  levelId: number;
  name: string;
  cost: number;
  description: string;
}[];

type ItemSelected = {
  levelId: number;
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
  level: number;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  player: PlayerType; 
};

const StoreDashboardComponent: React.FC<StoreDashboardComponentProps> = ({ openStore, setOpenStore, level, setPlayer, player }) => {
  const [itemsInStock, setItemsInStock] = useState<ItemsInStock | undefined>();
  const [cart, setCart] = useState<ItemSelected | undefined>()
  const [showToast, setShowToast] = useState(false)

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

    showItemsInStock({level: level});
  }, [level]);

  const handleOnClickItem = (item: ItemSelected) => {
    setCart(item);
    setShowToast(true);
  }

  const handleOnBuy = () => {
    setPlayer({...player, items: [...player.items, cart]})

  }



  return (
    <>
      {openStore &&
        <div className="storeToastBackground">
          <div>
            {itemsInStock?.map((obj, index) => (
              <div key={index}>
                <p>{obj.name}</p>
                <p>{obj.cost}g</p>
                <p>-{obj.description}</p>
              </div>
            ))}
          </div>
          <div>
            <button onClick={()=> setOpenStore(false)} className="buttonsNavigate">Close shop</button>
          </div>
        </div>}
    </>
  )
}

export default StoreDashboardComponent