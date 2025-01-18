import { useEffect, useState } from "react"
import highScore from "../services/highScoreService"

type HighScoreDisplay = {
  username: string;
  role: string;
  turns: number;
}[]

const HighScoreComponent = () => {
  const [highScoreDisplay, setHighScoreDisplay] = useState<HighScoreDisplay>([])

  useEffect(() => {

    const loadHighScore = async () => {

      try {

        const checkHighScore = await highScore()
        if ("checked" in checkHighScore && checkHighScore.checked === "na") {
          return
        } else if (!("checked" in checkHighScore) && checkHighScore) {
          setHighScoreDisplay(checkHighScore)
        }

      } catch (error) {

        if (error instanceof TypeError) {
          console.error("Server Error, please contact admin");
        } else if (error instanceof Error) {
          console.error(`${error.message}`);
        } else {
          console.error("Client Error");
        }
      }
    }

    loadHighScore()
  }, [])

  return (
    <div>
      <div className="hs-data">
        <div>
          <h4>Username</h4>
        </div>
        <div>
          <h4>Role</h4>
        </div>
        <div>
          <h4>Turns</h4>
        </div>
      </div>
      <div className="hs-data-div">
      {highScoreDisplay.map((obj, index) => (
        <div key={index} className="hs-data">
          <div>
            <p>{obj.username}</p>
          </div>
          <div>
            <p>{obj.role}</p>
          </div>
          <div>
            <p>{obj.turns}</p>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default HighScoreComponent