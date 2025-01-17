import { useNavigate } from "react-router-dom";

import LoginComponent from "../components/userAuth/LoginComponent";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="form-display-div">
      <div className="fd-heading-div">
        <h3>Login</h3>
      </div>
      <div className="fd-form-div">
        <LoginComponent />
      </div>
      <div className="fd-navigation-div">
        <div onClick={() => navigate("/signup")}>
          <button className="buttonsNavigate">Sign up now</button>
        </div>
        <div onClick={() => navigate("/forgotpassword")}>
          <button className="buttonsNavigate">Forgot password</button>
        </div>
      </div>
    </div>

  );
};

export default LoginPage