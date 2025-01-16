type PlayerItems = {
  items: string[]
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

const inventoryItems = async (playerItems: PlayerItems): Promise<ItemsResponse> => {
  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/inventory`, {

      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playerItems),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    return json as ItemsResponse;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

const applyItemStats = async (playerItemsData: PlayeritemsData): Promise<PlayerNewData> => {
  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/useitems`, {

      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playerItemsData),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    return json as PlayerNewData;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export { inventoryItems, applyItemStats }