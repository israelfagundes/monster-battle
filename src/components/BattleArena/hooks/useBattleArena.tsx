import { useState, useEffect } from "react";

import { calculateBattleResult } from "@/lib/battleEngine";

import type { BattleArenaProps } from "@/components/BattleArena/types";
import type { Monster, BattleLog as BattleLogType } from "@/common/types";

function useBattleArena({ battleMonsters }: BattleArenaProps) {
  const [monster1, monster2] = battleMonsters;

  const [battleState, setBattleState] = useState({
    monster1: { ...monster1, hp: monster1.maxHp },
    monster2: { ...monster2, hp: monster2.maxHp },
    logs: [] as BattleLogType[],
    isComplete: false,
    winner: null as Monster | null,
    currentLogIndex: 0,
  });

  const [battleResult, setBattleResult] = useState<ReturnType<
    typeof calculateBattleResult
  > | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const result = calculateBattleResult(monster1, monster2);
    setBattleResult(result);
  }, [monster1, monster2]);

  const startBattle = async () => {
    if (!battleResult) return;

    setIsAnimating(true);

    setBattleState({
      monster1: { ...monster1, hp: monster1.maxHp },
      monster2: { ...monster2, hp: monster2.maxHp },
      logs: [],
      isComplete: false,
      winner: null,
      currentLogIndex: 0,
    });

    for (let i = 0; i < battleResult.battleLogs.length; i++) {
      const log = battleResult.battleLogs[i];

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setBattleState((prev) => {
        const newState = { ...prev };

        if (log.defender === monster1.name) {
          newState.monster1.hp = log.remainingHp;
        } else {
          newState.monster2.hp = log.remainingHp;
        }

        newState.logs = [...prev.logs, log];
        newState.currentLogIndex = i + 1;

        return newState;
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setBattleState((prev) => ({
      ...prev,
      isComplete: true,
      winner: battleResult.winner,
    }));

    setIsAnimating(false);
  };

  const resetBattle = () => {
    setBattleState({
      monster1: { ...monster1, hp: monster1.maxHp },
      monster2: { ...monster2, hp: monster2.maxHp },
      logs: [],
      isComplete: false,
      winner: null,
      currentLogIndex: 0,
    });
  };

  const getCurrentAttacker = () => {
    if (battleState.logs.length === 0) return null;
    const lastLog = battleState.logs[battleState.logs.length - 1];
    return lastLog.attacker;
  };

  return {
    battleState,
    isAnimating,
    startBattle,
    resetBattle,
    getCurrentAttacker,
  };
}

export default useBattleArena;
