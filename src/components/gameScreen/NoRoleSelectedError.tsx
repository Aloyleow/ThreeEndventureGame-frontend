import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type NoRoleSelectedErrorProps = {
  player: PlayerType;
}

const NoRoleSelectedError: React.FC<NoRoleSelectedErrorProps> = ({ player }) => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {

    const checkValidRole = () => {
      if ((player.gold && player.health) === 0) {
        setShowToast(true);       
      } else {
        return;
      }
    }

    checkValidRole();
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
            <h3>Role not selected !</h3> 
            <div>
              <button className="buttonsNavigate" onClick={() => handleBackToMenu()}>Back to menu</button>
            </div>
          </div> 
        </div>
      }
    </>
  )
}

export default NoRoleSelectedError