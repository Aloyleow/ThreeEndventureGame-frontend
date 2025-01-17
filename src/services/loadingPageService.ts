type BackendLoaded = {
  checked: boolean;
}

const loadPage = async ()=> {
  try {

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/test`, {

      method: "GET",
      headers: {"Content-Type": "application/json"},
      
    });

    const json = await res.json();
    
    if (json.error) {
      throw new Error(json.error);
    }

    return json as BackendLoaded;
   
  } catch (error) {

    console.error(error);
    
    throw error;

  }
}

export default loadPage