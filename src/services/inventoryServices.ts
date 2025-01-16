type PlayerItems = {
  items: string[]
};

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

export default inventoryItems