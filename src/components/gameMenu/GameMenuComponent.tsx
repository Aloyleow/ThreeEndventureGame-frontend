import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";
import React from "react";

type GameMenu = {
  display: string;
  link: string;
}[];

const gameMenu: GameMenu = [
  {
    display: "Start your adventure",
    link: "/verified/game"
  },
  {
    display: "Instructions",
    link: "inst"
  },
  {
    display: "Highscores",
    link: "/verified/highscore"
  },
  {
    display: "Profile",
    link: "/verified/profile"
  },
  {
    display: "Log out",
    link: "logout"
  },
];

type GameMenuComponentProps = {
  setOpenInstructions: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameMenuComponent: React.FC<GameMenuComponentProps> = ({ setOpenInstructions }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (item: string) => {
    if (item === "logout") {
      logout();
    } else if (item === "inst"){
      setOpenInstructions(true);
    } else {
      navigate(item);
    }
  };

  return (
    <div className="gm-items-div">
      {gameMenu.map((obj, index) => (
        <div 
        key={index} 
        onClick={() => handleMenuClick(obj.link)}
        >
          <h3>{obj.display}</h3>
        </div>
      ))}
    </div>
  )
};

export default GameMenuComponent