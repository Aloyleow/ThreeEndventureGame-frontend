import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type NoRoleSelectedErrorProps = {
  player: PlayerType;
}

const NoRoleSelectedError: React.FC<NoRoleSelectedErrorProps> = ({ player }) => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {

    const checkValidRole = (player: PlayerType) => {
      if (player.maxhealth === 0 && player.maxmana === 0) {
        setShowToast(true);       
      } else {
        return;
      }
    }

    checkValidRole(player);

  }, [player]);

  const handleBackToMenu = () => {
    setShowToast(false);
    navigate("/verified");
  };

  return (
    <>
      {showToast &&
        <div className="toasty-toast">     
          <div className="toasty-div">
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