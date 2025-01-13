import React from "react";

type FightComponentProps = {
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  currentPath: SelectedPath;
};

const FightComponent: React.FC<FightComponentProps> = ({ player, setPlayer, currentPath }) => {

  return (
    <div className="fightDiv">
      <div className="enemyFightDiv">
        <div>
          <h1>{currentPath.encounter.name}</h1>
          <button>Fight</button>
        </div>

      </div>
      <div className="playerFightDiv">
        <div>
          <img src={player.image} alt={player.alt} width={80} />
        </div>
      </div>
    </div>
  )
}

export default FightComponent