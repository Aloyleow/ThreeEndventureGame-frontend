import React, { useState, useEffect } from "react"

type LandingComponentProps = {
  player: PlayerType;
  setShowLanding: React.Dispatch<React.SetStateAction<boolean>>
};

const LandingComponent: React.FC<LandingComponentProps> = ({ player, setShowLanding }) => {
  const [showStory, setShowStory] = useState(true)
 
    useEffect(() => {
  
      const checkValidRole = (player: PlayerType) => {
        if (player.maxhealth === 0 && player.maxmana === 0) {
          setShowStory(false);       
        } else {
          return;
        }
      }
  
      checkValidRole(player);
    },[player])
  
  return (
    <div className="landingDiv">
      {showStory ?
        <div>
          <h2>The only way out is getting to one of the</h2>
          <h2>Three Ends</h2>
          <button className="buttonsNavigate" onClick={() => setShowLanding(false)}>Next</button>
        </div>
        :
        <h2>Role not chosen</h2>
      }
    </div>
  )
}

export default LandingComponent