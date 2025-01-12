import React, { useState, useEffect } from "react"

type PathChoicesComponentProps = {
  setShowPath: React.Dispatch<React.SetStateAction<boolean>>
};

const PathChoicesComponent: React.FC<PathChoicesComponentProps> = ({ setShowPath }) => {
  const [pathChoices, setPathChoices] = useState()
 
  
  return (
    <div>
      PC
    
    </div>
  )
}

export default PathChoicesComponent