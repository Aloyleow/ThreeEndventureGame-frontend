import React, { useState } from "react";
import { items } from "../../data/items";

type StoreDashboardComponentProps = {
  openStore: boolean;
  setOpenStore: React.Dispatch<React.SetStateAction<boolean>>;
};

const StoreDashboardComponent: React.FC<StoreDashboardComponentProps> = ({ openStore, setOpenStore }) => {
  const [itemsInStock, setItemsInStock] = useState(items)

  return (
    <>
      {openStore &&
        <div className="storeToastBackground">

        </div>}
    </>
  )
}

export default StoreDashboardComponent