import { useNavigate } from "react-router-dom"

const AnomalyWinComponent = () => {
  const navigate = useNavigate()
  return (
    <div  className="ending-div">
      <div>
        <h1>The End</h1>
      </div>
      <div>
        <h3>You successfully killed the Anomaly</h3>
      </div>
      <div>
        <button onClick={() => navigate("/verified")} className="buttonsNavigate">Back to menu</button>
      </div>
    </div>
  )
}

export default AnomalyWinComponent