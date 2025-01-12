import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import ForgetPassPage from "./pages/ForgotPassPage"
import AuthorisedRoute from "./components/AuthorisedRoute"
import GameMenuPage from "./pages/GameMenuPage"
import GameScreenPage from "./pages/GameScreenPage"
import RoleSelectPage from "./pages/RoleSelectPage"

const playerTypePlaceHolder = {
  image: "",
  alt: "",
  role: "",
  items: [""],
  skills: [""],
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
function App() {
  const [player, setPlayer] = useState<PlayerType>(playerTypePlaceHolder);
  console.log(player)
  
  return (
    <>
      <div className="appMain">
        <h1>Three Endventure Game</h1>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/forgotpassword" element={<ForgetPassPage/>}/>
          <Route path="/verified" element={<AuthorisedRoute><GameMenuPage setPlayer={setPlayer}/></AuthorisedRoute>} />
          <Route path="/verified/game" element={<AuthorisedRoute><RoleSelectPage setPlayer={setPlayer}/></AuthorisedRoute>}/>
          <Route path="/verified/gamescreen" element={<AuthorisedRoute><GameScreenPage player={player} setPlayer={setPlayer}/></AuthorisedRoute>} />
        </Routes>   
      </div>
    </>
  )
}

export default App
