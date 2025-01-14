import React, { useState } from "react";
import { enemyRoll, playerRoll } from "../../../services/fightService";

type FightResultsResponse = {
  enemyHealth: number,
  damageDealt: number,
  damageType: string
};

type ReqStatsPlayerRoll = {
  playerAttack: number;
  enemyHealth: number;
};

type ReqStatsEnemyRoll = {
  enemyAttack: number;
  enemyName: string;
  playerHealth: number;
};

type FightComponentProps = {
  player: PlayerType;
  setPlayer: React.Dispatch<React.SetStateAction<PlayerType>>;
  currentPath: SelectedPath;
  setCurrentPath: React.Dispatch<React.SetStateAction<SelectedPath>>;
};

const FightComponent: React.FC<FightComponentProps> = ({ player, setPlayer, currentPath, setCurrentPath }) => {
  const [playerAttackComment, setPlayerAttackComment] = useState<string>("")
  const [enemyAttackComment, setEnemyAttackComment] = useState<string>("")  

  const handleOnFight = async() => {
    const reqStatsP: ReqStatsPlayerRoll = {
      playerAttack: player.attack,
      enemyHealth: currentPath.encounter.health
    } 

    const reqStatsE: ReqStatsEnemyRoll = {
      enemyAttack: currentPath.encounter.attack,
      enemyName: currentPath.encounter.name,
      playerHealth: player.health,
    }

    try {

      const playerHit: FightResultsResponse = await playerRoll(reqStatsP);
      setPlayerAttackComment(playerHit.damageType);
      setCurrentPath((prev) => ({
        ...prev,
        encounter: {
          ...prev.encounter,
          health: playerHit.enemyHealth,
        } 
      }));
      const enemyHit: FightResultsResponse = await enemyRoll(reqStatsE);
      setEnemyAttackComment(enemyHit.damageType);
      setPlayer((prev) => ({...prev, health: enemyHit.enemyHealth}));
      
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

  return (
    <div className="fightDiv">
      <div className="enemyFightDiv">
        <div>
          <h1>{currentPath.encounter.name}</h1>
          <h3>Health: {currentPath.encounter.health}</h3>
          <button onClick={() => handleOnFight()}>Fight</button>
          <h3>{playerAttackComment}</h3>
        </div>

      </div>
      <div className="playerFightDiv">
        <div>
          <h3>{enemyAttackComment}</h3>
          <img src={player.image} alt={player.alt} width={80} />
        </div>
      </div>
    </div>
  )
}

export default FightComponent