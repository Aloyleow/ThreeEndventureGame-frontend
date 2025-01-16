type PathTaken = {
  pathTaken: number
};

const storeItems = async (pathTaken: PathTaken): Promise<ItemsResponse> => {
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
      body: JSON.stringify(pathTaken),

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

export default storeItems