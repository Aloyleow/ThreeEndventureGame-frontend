import { useState } from "react"

import { Route, Routes } from "react-router-dom"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import ForgetPassPage from "./pages/ForgotPassPage"
import AuthorisedRoute from "./components/AuthorisedRoute"
import GameMenuPage from "./pages/GameMenuPage"
import CharacterSelectPage from "./pages/CharacterSelectPage"
import GameScreenPage from "./pages/GameScreenPage"


function App() {
  const [selectedChar, setSelectedChar] = useState<CharSelectedType | undefined>()
  console.log(selectedChar)
  
  return (
    <>
      <div className="appMain">
        <h1>Three Endventure Game</h1>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/forgotpassword" element={<ForgetPassPage/>}/>
          <Route path="/verified" element={<AuthorisedRoute><GameMenuPage setSelectedChar={setSelectedChar}/></AuthorisedRoute>} />
          <Route path="/verified/game" element={<AuthorisedRoute><CharacterSelectPage setSelectedChar={setSelectedChar}/></AuthorisedRoute>}/>
          <Route path="/verified/gamescreen" element={<AuthorisedRoute><GameScreenPage/></AuthorisedRoute>} />
        </Routes>   
      </div>
    </>
  )
}

export default App
