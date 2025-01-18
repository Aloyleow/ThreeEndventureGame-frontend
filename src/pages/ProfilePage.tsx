import { useNavigate } from "react-router-dom"
import ChangePassComponent from "../components/userAuth/ChangePassComponent"

const ProfilePage = () => {
  const navigate = useNavigate()
  return (
    <div className='form-display-div'>
      <div className="fd-heading-div">
        <h3>Profile</h3>
      </div>
      <div className="fd-form-div">
      <ChangePassComponent />
      </div>
      <div>
        <button className='buttonsNavigate' onClick={() => navigate("/verified")}>
          Back to menu
        </button>
      </div>
      
    </div>
  )
}
export default ProfilePage