import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

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
    link: "/verified/instructions"
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

const GameMenuComponent = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick = (item: string) => {
    if (item === "logout") {
      logout();
    } else {
      navigate(item);
    };
  };

  return (
    <div className="gameMenuDiv">
      {gameMenu.map((obj, index) => (
        <div 
        key={index} 
        onClick={() => handleMenuClick(obj.link)}
        className="menuItemDiv"
        >
          <h3>{obj.display}</h3>
        </div>
      ))}
    </div>
  )
};

export default GameMenuComponent