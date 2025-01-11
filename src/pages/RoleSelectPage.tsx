import React from "react";

import RoleSelectComponent from "../components/roleSelect/RoleSelectComponent";

type RoleSelectPageProps = {
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const RoleSelectPage: React.FC<RoleSelectPageProps> = ({ setPlayer }) => {
  
  return (
    <div className="gameMenuPageDiv">
      <RoleSelectComponent setPlayer={setPlayer}/>
    </div>
  )
};

export default RoleSelectPage