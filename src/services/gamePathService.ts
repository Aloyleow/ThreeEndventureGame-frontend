type PathTaken = {
  monsterKilled: string[];
}

type GamePath = {
  pathId: number;
  pathName: string;
  encounter: {
    enemy: boolean;
    name: string;
    health: number;
    attack: number;
    gold: number;
  }
}[];

const gamePath = async (pathTaken: PathTaken) => {
  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/gamepaths`, {

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
   
    return json as GamePath;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }

}

export default gamePath;