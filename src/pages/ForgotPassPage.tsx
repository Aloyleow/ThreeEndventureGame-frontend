import { Link } from "react-router-dom";

import ForgetPassComponent from "../components/userAuth/ForgetPassComponent";

const ForgetPassPage = () => {
  
  return (
    <>
      <div className="formDisplayScreenDiv">
        <div className="fdsHeadingDiv">
          <h3>Forget Password</h3>
        </div>
        <div className="fdsFormDiv">
          <ForgetPassComponent/>
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

export default ForgetPassPage