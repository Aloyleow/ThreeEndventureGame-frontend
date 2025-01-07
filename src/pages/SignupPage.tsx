import { Link } from "react-router-dom";
import SignupComponent from "../components/userAuth/SignupComponent";

const SignupPage = () => {
  
  return (
    <>
      <div className="formDisplayScreenDiv">
        <div className="fdsHeadingDiv">
          <h3>Sign up</h3>
        </div>
        <div className="fdsFormDiv">
          <SignupComponent/>
        </div>
        <div>
          <div className="fdsBTLDiv">
            <Link to="/">Back to Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage