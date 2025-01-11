type ActiveRoleCheckResponse = PlayerType | {checked : string}

const activeRoleCheck = async (): Promise<ActiveRoleCheckResponse> => {
  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/player`, {

      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json as ActiveRoleCheckResponse;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default activeRoleCheck