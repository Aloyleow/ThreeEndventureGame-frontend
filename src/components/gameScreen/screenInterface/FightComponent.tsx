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
  setShowDeath: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFight: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPaths: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAnoVictory: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAnoLost: React.Dispatch<React.SetStateAction<boolean>>;
};

const FightComponent: React.FC<FightComponentProps> = ({
  player,
  setPlayer,
  currentPath,
  setCurrentPath,
  setShowDeath,
  setShowFight,
  setShowPaths,
  setShowAnoVictory,
  setShowAnoLost
}) => {
  const [playerAttackComment, setPlayerAttackComment] = useState<string>("")
  const [enemyAttackComment, setEnemyAttackComment] = useState<string>("")
  const [showNext, setShowNext] = useState(false)

  const handleOnFight = async () => {
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

      //check for invalid re-entry
      if (reqStatsP.enemyHealth === 0 || reqStatsE.playerHealth === 0) {
        throw new Error(`${reqStatsP.enemyHealth === 0 ? "Enemy dead" : "Player Dead"}`)
      }

      //player roll
      const playerHit: FightResultsResponse = await playerRoll(reqStatsP);
      setPlayerAttackComment(playerHit.damageType);
      setCurrentPath((prev) => ({
        ...prev,
        encounter: {
          ...prev.encounter,
          health: playerHit.enemyHealth,
        }
      }));

      //enemy roll
      const enemyHit: FightResultsResponse = await enemyRoll(reqStatsE);
      setEnemyAttackComment(enemyHit.damageType);
      setPlayer((prev) => ({ ...prev, health: enemyHit.enemyHealth }));

      //On player Victory
      if (playerHit.enemyHealth === 0 && currentPath.encounter.name === "Anomaly") {
        setShowFight(false);
        setShowAnoVictory(true);
        setPlayer((prev) => ({
          ...prev, 
          active: false,
          win: true
        }));
      } 

      if (playerHit.enemyHealth === 0 && currentPath.encounter.name !== "Anomaly") {
        setShowNext(true);
        setPlayer((player) => ({
          ...player,
          pathtaken: [
            ...player.pathtaken,
            currentPath.encounter.name
          ],
          gold: player.gold + currentPath.encounter.gold
        }))
      }

      //On player death
      if (enemyHit.enemyHealth === 0 && currentPath.encounter.name === "Anomaly") {
        setShowFight(false);
        setShowAnoLost(true);
        setPlayer((prev) => ({...prev, active: false}));     
      }

      if (enemyHit.enemyHealth === 0 && currentPath.encounter.name !== "Anomaly") {
        setShowFight(false);
        setShowDeath(true);
        setPlayer((prev) => ({...prev, active: false}));
      }
      

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

  const handleOnNext = () => {
    setShowFight(false);
    setShowPaths(true);
  }

  return (
    <div className="fightDiv">
      <div className="enemyFightDiv">
        <div>
          <h3>{currentPath.encounter.name}</h3>
          <p>Health: {currentPath.encounter.health}</p>
          {showNext ?
            <button onClick={() => handleOnNext()}>Next</button>
            :
            <button onClick={() => handleOnFight()}>Fight</button>}
          <div className="attackCommentsDiv">
            <p>{playerAttackComment}</p>
          </div>

        </div>

      </div>
      <div className="playerFightDiv">
        <div>
          <div className="attackCommentsDiv">
            <p>{enemyAttackComment}</p>
          </div>
          <img src={player.image} alt={player.alt} width={80} />
        </div>
      </div>
    </div>
  )
}

export default FightComponent