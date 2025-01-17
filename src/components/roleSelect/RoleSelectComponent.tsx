import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

import recordRole from "../../services/recordRoleService";
import { playerRoles } from "../../data/roles";

type RoleSelectComponentProps = {
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const RoleSelectComponent: React.FC<RoleSelectComponentProps> = ({ setPlayer }) => {
  const [showToast, setShowToast] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const [errorsLog, setErrorsLog] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRoleData, setSelectedRoleData] = useState<PlayerType>();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleOnRoleSelect = (roleData: PlayerType) => {
    setSelectedRoleData(roleData);
    setPlayer(roleData);
    setShowToast(true);
  };

  const handleOnYes = async () => {
    try {

      setLoading(true);

      if (!selectedRoleData) {
        throw new Error("Selected role missing");
      }

      await recordRole(selectedRoleData);

      setShowToast(false);
      navigate("/verified/gamescreen");

    } catch (error) {

      setShowToastError(true);
      if (error instanceof TypeError) {
        setErrorsLog("Server Error, please contact admin");
      } else if (error instanceof Error) {
        setErrorsLog(`${error.message}`);
      } else {
        setErrorsLog("Client Error");
      }

    } finally {
      setLoading(false);
    }

  };

  const handleOnNo = () => {
    setShowToast(false);
  };


  return (
    <div className="roles-div">
      {playerRoles.map((obj, index) => (
        <div key={index} className="role-display">
          <div>
            <img src={obj.image} alt={obj.alt} width={58} />
            <p>{obj.role}</p>
          </div>
          <div>
            <p>Health: {obj.health}</p>
            <p>Mana: {obj.mana}</p>
            <p>Attack: {obj.attack}</p>
            <p>Gold: {obj.gold}</p>
          </div>
          <div>
            <button onClick={() => handleOnRoleSelect(obj)} className="buttons-selection">{obj.role}</button>
          </div>
        </div>
      ))}
      {showToast &&
        <div className="toasty-toast">
          {!showToastError ?
            <div className="toasty-div">
              <h3>You have selected {selectedRoleData?.role} are you certain ? {selectedRoleData?.role === "Human" ? "The road ahead will be tough." : ""}</h3>
              {loading ?
                <div className="loader">
                </div>
                :
                <div className="toasty-2buttons-div">
                  <button className="buttonsNavigate" onClick={() => handleOnYes()}>Yes</button>
                  <button className="buttonsNavigate" onClick={() => handleOnNo()}>No</button>
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
    </div>
  )
};

export default RoleSelectComponent