type ForgetPass = {
  email: string;
}

type EmailJsData = {
  human_name: string,
  new_password: string,
  human_email: string,
}

const forgetPassword = async (email: ForgetPass) => {
  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/forgetpassword`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),

    });

    const json = await res.json();
    if (json.error) {
      throw new Error(json.error);
    }
   
    return json as EmailJsData;
    
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default forgetPassword