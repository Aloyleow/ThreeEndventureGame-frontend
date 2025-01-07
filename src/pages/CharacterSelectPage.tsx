import React from "react";
import CharacterSelectComponent from "../components/charSelect/CharacterSelectComponent";

type CharacterSelectPageProps = {
  setSelectedChar: React.Dispatch<React.SetStateAction<CharSelectedType | undefined>>;
};

const CharacterSelectPage: React.FC<CharacterSelectPageProps> = ({ setSelectedChar }) => {
  
  return (
    <div className="gameMenuPageDiv">
      <CharacterSelectComponent setSelectedChar={setSelectedChar}/>
    </div>
  )
};

export default CharacterSelectPage