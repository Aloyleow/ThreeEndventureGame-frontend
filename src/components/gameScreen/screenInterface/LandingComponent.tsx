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
    <div className="landing-div">
      {showStory ?
        <div>
          <h2>Something in the world went wrong, an anomaly appeared and disrupted reality, you are the only survivor. Find it and kill it! </h2>
          <h3>The only way out is getting to one of the Three Ends</h3>
          <button className="buttonsNavigate" onClick={() => setShowLanding(false)}>Next</button>
        </div>
        :
        <h2>Role not chosen</h2>
      }
    </div>
  )
}

export default LandingComponent