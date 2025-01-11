import React from "react";

type SkillsComponentProps = {
  setOpenSkills: React.Dispatch<React.SetStateAction<boolean>>;
};

const SkillsComponent: React.FC<SkillsComponentProps> = ({ setOpenSkills }) => {

  return (
    <div className="storeToastBackground">
      <div>
        <h3>Skills</h3>
      </div>
      <div>
      
      </div>
      <div>
        <button className="buttonsNavigate" onClick={() => setOpenSkills((prev) => !prev)}>Close</button>
      </div>
      
    </div>
  )
}

export default SkillsComponent