import React, { useState, useEffect } from "react"

type LandingComponentProps = {
  player: PlayerType;
  setLanding: React.Dispatch<React.SetStateAction<boolean>>
};

const LandingComponent: React.FC<LandingComponentProps> = ({ player, setLanding }) => {
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
    <div>
      {showStory ?
        <div>
          <h1>The only way is getting to one of the Three Ends</h1>
          <button className="buttonsNavigate" onClick={() => setLanding(false)}>Next</button>
        </div>
        :
        <h1>Role not chosen</h1>
      }
    </div>
  )
}

export default LandingComponent