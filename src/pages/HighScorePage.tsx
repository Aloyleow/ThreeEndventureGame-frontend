import { useNavigate } from "react-router-dom"
import HighScoreComponent from "../components/HighScoreComponent"

const HighScorePage = () => {
  const navigate = useNavigate()

  return (
    <div className="highscore-div">
      <h3>High Scores</h3>
      <HighScoreComponent />
      <div>
        <button className="buttonsNavigate" onClick={() => navigate("/verified")}>Back to Menu</button>
      </div>
    </div>
  )
}

export default HighScorePage