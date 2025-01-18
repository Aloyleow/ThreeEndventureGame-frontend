import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

const navbar = [
  {
    name: "Menu",
    link: "/verified"
  },
  {
    name: "Instructions",
    link: "inst",
  },
  {
    name: "Logout",
    link: "logout",
  }
]


type NavbarComponentProps = {
  setOpenInstructions: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarComponent: React.FC<NavbarComponentProps> = ({ setOpenInstructions }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleNavClick = (item: string) => {
    if (item === "logout") {
      logout();
    } else if (item === "inst"){
      setOpenInstructions(true);
    } else {
      navigate(item);
    }
  };

  return (
    <div className="gs-navbar">
      {navbar.map((obj, index) => (
        <div onClick={() => handleNavClick(obj.link)} key={index}>
          <h3>{obj.name}</h3>
        </div>
      ))}  
    </div>
  )
}

export default NavbarComponent