import React, { useState } from "react";
import { enemyRoll, playerRoll } from "../../../services/fightService";
import saveRole from "../../../services/roleSaveService";
import deleteRole from "../../../services/deleteRoleService";

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
  setShowAnoLost,
}) => {
  const [playerAttackComment, setPlayerAttackComment] = useState<string>("");
  const [enemyAttackComment, setEnemyAttackComment] = useState<string>("");
  const [showNext, setShowNext] = useState(false);



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
        },
      }));
      setPlayer((prev) => ({
        ...prev,
        turns: prev.turns++
      }))

      //enemy roll
      const enemyHit: FightResultsResponse = await enemyRoll(reqStatsE);
      setEnemyAttackComment(enemyHit.damageType);
      setPlayer((prev) => ({
        ...prev,
        health: enemyHit.enemyHealth,
      }));

      //On player Victory
      if (playerHit.enemyHealth === 0 && currentPath.encounter.name === "Anomaly") {
        setPlayer((prev) => ({
          ...prev,
          active: false,
          win: true
        }));
        await saveRole(player)
        setShowFight(false);
        setShowAnoVictory(true);
      }

      if (playerHit.enemyHealth === 0 && currentPath.encounter.name !== "Anomaly") {
        setPlayer((player) => ({
          ...player,
          pathtaken: [
            ...player.pathtaken,
            currentPath.encounter.name
          ],
          gold: player.gold + currentPath.encounter.gold
        }))
        await saveRole(player);
        setShowNext(true);
      }

      //On player death
      if (enemyHit.enemyHealth === 0 && currentPath.encounter.name === "Anomaly") {
        setPlayer((prev) => ({ ...prev, active: false }));
        await deleteRole();
        setShowFight(false);
        setShowAnoLost(true);
      }

      if (enemyHit.enemyHealth === 0 && currentPath.encounter.name !== "Anomaly") {
        setPlayer((prev) => ({ ...prev, active: false }));
        await deleteRole();
        setShowFight(false);
        setShowDeath(true);
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
    <div className="fight-div">
      <div className="enemyfight-div">
        <div className="enemy-display-div">
          <h3>{currentPath.encounter.name}</h3>
          <p>Health: {currentPath.encounter.health}</p>
          {!showNext && <button onClick={() => handleOnFight()} className="buttons-selection">Fight</button>}
        </div>
        <div className="comments-enemyfight-div">
          <p>{playerAttackComment}</p>
        </div>
        {showNext && <button onClick={() => handleOnNext()} className="buttons-selection">Next</button>}
      </div>
      <div className="playerfight-div">
        <div className="comments-playerfight-div">
          <p>{enemyAttackComment}</p>
        </div>
        <img src={player.image} alt={player.alt} width={80} />
      </div>
    </div>
  )
}

export default FightComponent