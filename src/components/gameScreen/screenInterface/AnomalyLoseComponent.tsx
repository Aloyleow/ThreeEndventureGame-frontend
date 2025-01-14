import { useNavigate } from "react-router-dom"

const AnomalyLoseComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="endingDiv">
      <div>
        <h1>Anomaly End</h1>
      </div>
      <div>
        <h3>You are now one of the Anomaly Spawn</h3>
      </div>
      <div>
        <button onClick={() => navigate("/verified")} className="buttonsNavigate">Back to menu</button>
      </div>
    </div>
  )
}

export default AnomalyLoseComponent