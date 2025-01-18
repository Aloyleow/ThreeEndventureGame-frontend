type HighScoreData = {
  username: string;
  role: string;
  turns: number;
}[] | {checked : string}

const highScore = async (): Promise<HighScoreData> => {
  try {

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authorization token error.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/verified/highscores`, {

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

    return json as HighScoreData;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default highScore