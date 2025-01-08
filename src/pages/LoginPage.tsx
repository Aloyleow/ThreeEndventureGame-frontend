import { useNavigate } from "react-router-dom";

import LoginComponent from "../components/userAuth/LoginComponent";

const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="formDisplayScreenDiv">
        <div className="fdsHeadingDiv">
          <h3>Login</h3>
        </div>
        <div className="fdsFormDiv">
          <LoginComponent />
        </div>
        <div className="fdsNavDiv">
          <div onClick={() => navigate("/signup")}>
            <button className="buttonsNavigate">Sign up now</button>
          </div>
          <div onClick={() => navigate("/forgotpassword")}>
            <button className="buttonsNavigate">Forgot password</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage