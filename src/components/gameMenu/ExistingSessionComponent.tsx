import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

import deletePlayerCharacter from "../../services/deletePlayerCharacterService";
import playerCharacter from "../../services/playerCharacterService";

type ExistingSessionComponentProps = {
  setSelectedChar: React.Dispatch<React.SetStateAction<CharSelectedType | undefined>>;
};

const ExistingSessionComponent: React.FC<ExistingSessionComponentProps> = ({ setSelectedChar }) => {
  const [showToast, setShowToast] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const [errorsLog, setErrorsLog] = useState("");
  const [loading, setLoading] = useState(false);
  // const [tempCharData, setTempCharData] = useState<CharSelectedType>();
  // const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {

    const checkPlayerChar = async () => {

      try {

        const checkExistingSess = await playerCharacter()
        if (checkExistingSess.checked === "na") {
          return
        } else {
          // setTempCharData(checkExistingSess)
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

  // const handleOnYes = () => {
  //   setSelectedChar(tempCharData);
  //   setShowToast(false);
  //   navigate("/verified/gamescreen");
  // };

  const handleOnDelete = async () => {
    setLoading(true);
    try {

      await deletePlayerCharacter();
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
        <div className="toastyToastBackground">
          {!showToastError ?
          <div className="toastyToast">
            <h3>Exisitng session in place, continue ?</h3>
           {loading ?
            <div className="loader">
            </div>
            :
            <div>
              {/* <button className="buttonsNavigate" onClick={() => handleOnYes()}>Yes</button> */}
              <button className="buttonsNavigate" onClick={() => handleOnDelete()}>Delete</button>
            </div>} 
          </div>
          :
          <div className="toastyToast">
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

export default ExistingSessionComponent