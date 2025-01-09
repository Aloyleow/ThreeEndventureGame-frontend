import React, { useState } from "react";

type HumanDashboardComponentProps = {
  selectedChar: CharSelectedType;
};

const HumanDashboardComponent: React.FC<HumanDashboardComponentProps> = ({ selectedChar }) => {
  const [currentChar, setCurrentChar] = useState<CharSelectedType>(selectedChar);
  


  return (
    <div className="HdashboardDiv">
      <div>
        <p>Health: {currentChar.health}</p>
        <p>Mana: {currentChar.mana}</p>
        <p>Attack: {currentChar.attack}</p>
        <p>Gold: {currentChar.gold}</p>
      </div>
      <div>

      </div>
    
    </div>
  )
}

export default HumanDashboardComponent