import React from "react";

import RoleSelectComponent from "../components/roleSelect/RoleSelectComponent";
import ExistingSessionError from "../components/roleSelect/ExistingSessionError";

type RoleSelectPageProps = {
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
};

const RoleSelectPage: React.FC<RoleSelectPageProps> = ({ setPlayer }) => {
  
  return (
    <div className="role-select-div">
      <div className="role-heading-div">
        <h3>Choose your character</h3>
      </div>
      <RoleSelectComponent setPlayer={setPlayer} />
      <ExistingSessionError />
    </div>
  )
};

export default RoleSelectPage