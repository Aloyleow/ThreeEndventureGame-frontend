type Level = {
  level: number
};

type StoreItemsResponse = {
  levelId: number;
  name: string;
  cost: number;
  description: string;
}[];

const storeItems = async (level: Level): Promise<StoreItemsResponse> => {
  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/storeitems`, {

      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(level),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    return json as StoreItemsResponse;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default storeItems