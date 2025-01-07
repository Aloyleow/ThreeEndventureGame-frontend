type SignupUser = {
  email: string;
  username: string;
  password: string;
}

const signupUser = async (formData: SignupUser) => {
  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    return json;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default signupUser