import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Swords } from "lucide-react";

import type { BattleArenaProps } from "@/components/BattleArena/types";

import HPBar from "@/components/HPBar";
import BattleLog from "@/components/BattleLog";
import MonsterImage from "@/components/MonsterImage";
import useBattleArena from "@/components/BattleArena/hooks/useBattleArena";
import BattleStatus from "@/components/BattleStatus";
import BackToMonsters from "@/components/BackToMonsters";

function BattleArena({ battleMonsters }: BattleArenaProps) {
  const [monster1, monster2] = battleMonsters;

  const {
    battleState,
    isAnimating,
    resetBattle,
    startBattle,
    getCurrentAttacker,
  } = useBattleArena({ battleMonsters });

  return (
    <div className="container mx-auto max-w-6xl px-4">
      {/* Header */}
      <div className="mb-8">
        <BackToMonsters />

        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl text-white">Battle Arena</h1>

          <div className="flex items-center space-x-4">
            <button
              onClick={resetBattle}
              disabled={isAnimating}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors disabled:opacity-40"
            >
              <span>Reset</span>
              <RotateCcw className="h-4 w-4" />
            </button>

            {!isAnimating && battleState.logs.length === 0 && (
              <button
                onClick={startBattle}
                className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
              >
                <Swords className="h-5 w-5" />
                <span>Start Battle!</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Battle Arena */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Monster 1 */}
        <div className="space-y-4">
          <motion.div
            animate={{
              x: getCurrentAttacker() === monster1.name ? 20 : 0,
              scale: getCurrentAttacker() === monster1.name ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`rounded-lg bg-gray-800 p-6 border-2 ${
              battleState.winner?.id === monster1.id
                ? "border-amber-400 glow"
                : battleState.isComplete &&
                  battleState.winner?.id !== monster1.id
                ? "border-gray-600 opacity-50"
                : "border-gray-700"
            }`}
          >
            <MonsterImage src={monster1.imageUrl} alt={monster1.name} />

            <h3 className="font-bold text-xl text-amber-400 mb-4 text-center">
              {monster1.name}
            </h3>

            <HPBar
              currentHp={battleState.monster1.hp}
              maxHp={monster1.maxHp}
              size="lg"
            />
          </motion.div>
        </div>

        <div className="space-y-4">
          <BattleLog
            logs={battleState.logs}
            isComplete={battleState.isComplete}
            winner={battleState.winner?.name}
          />
        </div>

        {/* Monster 2 */}
        <div className="space-y-4">
          <motion.div
            animate={{
              x: getCurrentAttacker() === monster2.name ? -20 : 0,
              scale: getCurrentAttacker() === monster2.name ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`rounded-lg bg-gray-800 p-6 border-2 ${
              battleState.winner?.id === monster2.id
                ? "border-amber-400 glow"
                : battleState.isComplete &&
                  battleState.winner?.id !== monster2.id
                ? "border-gray-600 opacity-50"
                : "border-gray-700"
            }`}
          >
            <MonsterImage src={monster2.imageUrl} alt={monster2.name} />

            <h3 className="font-bold text-xl text-amber-400 mb-4 text-center">
              {monster2.name}
            </h3>

            <HPBar
              currentHp={battleState.monster2.hp}
              maxHp={monster2.maxHp}
              size="lg"
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>{isAnimating && <BattleStatus />}</AnimatePresence>
    </div>
  );
}

export default BattleArena;
