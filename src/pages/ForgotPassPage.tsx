import { Link } from "react-router-dom";

import ForgetPassComponent from "../components/userAuth/ForgetPassComponent";

const ForgetPassPage = () => {
  
  return (
    <>
      <div className="form-display-div">
        <div className="fd-heading-div">
          <h3>Forget Password</h3>
        </div>
        <div className="fd-form-div">
          <ForgetPassComponent/>
        </div>
        <div>
          <div>
            <Link to="/">Back to Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassPage