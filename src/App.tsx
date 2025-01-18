import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"

import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import ForgetPassPage from "./pages/ForgotPassPage"
import AuthorisedRoute from "./components/AuthorisedRoute"
import GameMenuPage from "./pages/GameMenuPage"
import GameScreenPage from "./pages/GameScreenPage"
import RoleSelectPage from "./pages/RoleSelectPage"
import loadPage from "./services/loadingPageService"
import LoadPage from "./pages/LoadPage"
import InstructionsComponent from "./components/InstructionsComponent"

const playerTypePlaceHolder = {
  image: "",
  alt: "",
  role: "",
  pathtaken: [],
  items: [],
  skills: [],
  health: 0,
  maxhealth: 0,
  mana: 0,
  maxmana: 0,
  gold: 0,
  attack: 0,
  turns: 0,
  active: false,
  win: false
}

type BackendLoaded = {
  checked: boolean;
}
function App() {
  const [player, setPlayer] = useState<PlayerType>(playerTypePlaceHolder);
  const [openInstructions, setOpenInstructions] = useState(false)
  const [onLoad, setOnLoad] = useState<boolean>(true);

  useEffect(() => {

    const loadPageRes = async () => {
      try {

        const backendLoaded: BackendLoaded = await loadPage();
        setOnLoad(backendLoaded.checked)
         
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

    loadPageRes()

  }, [])

  return (
    <>
      <div className="app-structure-div">
        {onLoad && <LoadPage />}
        {openInstructions && <InstructionsComponent setOpenInstructions={setOpenInstructions}/>}
        <div className="app-structure-heading-div">
          <h1>Three Endventure Game</h1>
        </div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgetPassPage />} />
          <Route path="/verified" element={<AuthorisedRoute><GameMenuPage setOpenInstructions={setOpenInstructions}/></AuthorisedRoute>} />
          <Route path="/verified/game" element={<AuthorisedRoute><RoleSelectPage setPlayer={setPlayer} /></AuthorisedRoute>} />
          <Route path="/verified/gamescreen" element={<AuthorisedRoute><GameScreenPage player={player} setPlayer={setPlayer} setOpenInstructions={setOpenInstructions}/></AuthorisedRoute>} />
        </Routes>
      </div>
    </>
  )
}

export default App
