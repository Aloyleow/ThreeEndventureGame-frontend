import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

import deleteRole from "../../services/deleteRoleService";
import activeRoleCheck from "../../services/activeRoleCheckService";

type ExistingSessionErrorProps = {
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const ExistingSessionError: React.FC<ExistingSessionErrorProps> = ({ setPlayer }) => {
  const [showToast, setShowToast] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const [errorsLog, setErrorsLog] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {

    const checkPlayerChar = async () => {

      try {

        const checkExistingSess = await activeRoleCheck()
        if ("checked" in checkExistingSess && checkExistingSess.checked === "na") {
          return
        } else if ( !("checked" in checkExistingSess) && checkExistingSess ){
          setPlayer(checkExistingSess)
          setShowToast(true)
        } 

      } catch (error) {

        if (error instanceof TypeError) {
          console.error("Server Error, please contact admin");
        } else if (error instanceof Error) {
          console.error(`${error.message}`);
        } else {
          console.error("Client Error");
        }
      }
    };
    

    checkPlayerChar();
  }, []);

  const handleOnYes = () => {
    setShowToast(false);
    navigate("/verified/gamescreen");
  };

  const handleOnDelete = async () => {
    setLoading(true);
    try {

      await deleteRole();
      setLoading(false);
      setShowToast(false);

    } catch (error) {
      setLoading(false);
      setShowToastError(true);

      if (error instanceof TypeError) {
        setErrorsLog("Server Error, please contact admin");
      } else if (error instanceof Error) {
        setErrorsLog(`${error.message}`);
      } else {
        setErrorsLog("Client Error");
      }
    }
  };

  return (
    <>
      {showToast &&
        <div className="toasty-toast">
          {!showToastError ?
          <div className="toasty-div">
            <h3>Exisitng session in place, continue ?</h3>
           {loading ?
            <div className="loader">
            </div>
            :
            <div className="toasty-2buttons-div">
              <button className="buttonsNavigate" onClick={() => handleOnYes()}>Yes</button>
              <button className="buttonsNavigate" onClick={() => handleOnDelete()}>Delete</button>
            </div>} 
          </div>
          :
          <div className="toasty-div">
            <h3>{errorsLog}</h3>
            <div>
              <button className="buttonsNavigate" onClick={() => logout()}>Logout</button>
            </div> 
          </div>}
        </div>
      }
    </>
  )
}

export default ExistingSessionError