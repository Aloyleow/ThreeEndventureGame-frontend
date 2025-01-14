import { useNavigate } from "react-router-dom"

const DeathComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="endingDiv">
      <div>
        <h1>Dead End</h1>
      </div>
      <div>
        <img src="/grave.svg" alt="graveIcon" width={58} />
      </div>
      <div>
        <button onClick={() => navigate("/verified")} className="buttonsNavigate">Back to menu</button>
      </div>
    </div>
  )
}

export default DeathComponent