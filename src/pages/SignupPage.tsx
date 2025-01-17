import { Link } from "react-router-dom";

import SignupComponent from "../components/userAuth/SignupComponent";

const SignupPage = () => {

  return (
    <div className="form-display-div">
      <div className="fd-heading-div">
        <h3>Sign up</h3>
      </div>
      <div className="fd-form-div">
        <SignupComponent />
      </div>
      <div className="fd-link-div">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
};

export default SignupPage