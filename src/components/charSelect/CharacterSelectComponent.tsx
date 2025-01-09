import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

import savePlayerCharacter from "../../services/savePlayerCharacterService";
import { playerCharacters } from "../../data/characters";

type CharacterSelectComponentProps = {
  setSelectedChar: React.Dispatch<React.SetStateAction<CharSelectedType | undefined>>;
};

const CharacterSelectComponent: React.FC<CharacterSelectComponentProps> = ({ setSelectedChar }) => {
  const [showToast, setShowToast] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const [errorsLog, setErrorsLog] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCharData, setSelectedCharData] = useState<CharSelectedType>();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleOnCharSelect = (CharSelected: CharSelectedType) => {
    setSelectedCharData(CharSelected);
    setSelectedChar(CharSelected);
    setShowToast(true);
  };

  const handleOnYes = async () => {
    try {

      setLoading(true);

      if (!selectedCharData) {
        throw new Error ("Selected character missing");
      }
  
      await savePlayerCharacter(selectedCharData);

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
    <div>
      <h3 className="textAlign">Choose your character</h3>
      <div>
        {playerCharacters.map((obj, index) => (
          <div key={index} className="charSelectDiv" onClick={() => handleOnCharSelect(obj)}>
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
          </div>
        ))}
      </div>
      {showToast &&
        <div className="toastyToastBackground">
          {!showToastError ?
          <div className="toastyToast">
            <h3>You have selected {selectedCharData?.role} are you certain ? {selectedCharData?.role === "Human" ? "The road ahead will be tough." : ""}</h3>
           {loading ?
            <div className="loader">
            </div>
            :
            <div>
              <button className="buttonsNavigate" onClick={() => handleOnYes()}>Yes</button>
              <button className="buttonsNavigate" onClick={() => handleOnNo()}>No</button>
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
    </div>
  )
};

export default CharacterSelectComponent