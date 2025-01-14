type FightResultsResponse = {
  enemyHealth: number,
  damageDealt: number,
  damageType: string
};

type ReqStatsPlayerRoll = {
  playerAttack: number;
  enemyHealth: number;
};

const playerRoll = async (reqStats: ReqStatsPlayerRoll): Promise<FightResultsResponse> => {

  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/playerroll`, {

      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqStats),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    return json as FightResultsResponse;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

type ReqStatsEnemyRoll = {
  enemyAttack: number;
  enemyName: string;
  playerHealth: number;
}

const enemyRoll = async (reqStats: ReqStatsEnemyRoll): Promise<FightResultsResponse> => {
  
  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/enemyroll`, {

      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqStats),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    return json as FightResultsResponse;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export { playerRoll, enemyRoll }