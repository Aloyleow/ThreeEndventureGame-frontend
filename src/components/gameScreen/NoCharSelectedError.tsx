import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type NoCharSelectedErrorProps = {
  player: PlayerType;
}

const NoCharSelectedError: React.FC<NoCharSelectedErrorProps> = ({ player }) => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {

    const checkValidChar = () => {
      if (!player) {
        setShowToast(true);       
      } else {
        return;
      }
    }

    checkValidChar();
    //hmmmmm ~~~~
  }, []);

  const handleBackToMenu = () => {
    setShowToast(false);
    navigate("/verified");
  };

  return (
    <>
      {showToast &&
        <div className="toastyToastBackground">     
          <div className="toastyToast">
            <h3>Character not selected !</h3> 
            <div>
              <button className="buttonsNavigate" onClick={() => handleBackToMenu()}>Back to menu</button>
            </div>
          </div> 
        </div>
      }
    </>
  )
}

export default NoCharSelectedError