type LoginUser = {
  username: string;
  password: string;
}

const loginUser = async (user: LoginUser) => {
  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    localStorage.setItem("token", json.token);

    const payload = JSON.parse(atob(json.token.split(".")[1]));
    return payload;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default loginUser