import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollText, Sword, Shield } from "lucide-react";

import type { BattleLogProps } from "@/components/BattleLog/types";

function BattleLog({ logs, isComplete, winner }: BattleLogProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="rounded-lg bg-gray-800 border border-gray-700 p-4 shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <ScrollText className="h-5 w-5 text-amber-400" />
        <h3 className="text-lg font-semibold text-white">Battle Log</h3>
      </div>

      <div
        ref={scrollRef}
        className="battle-log h-64 overflow-y-auto space-y-2 pr-2"
      >
        <AnimatePresence>
          {logs.map((log, index) => (
            <motion.div
              key={`${log.round}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-3 p-3 rounded-lg bg-gray-700/50 border border-gray-600"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center">
                <span className="text-xs font-bold text-amber-400">
                  {log.round}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Sword className="h-4 w-4 text-red-400" />
                  <span className="text-sm font-medium text-amber-400">
                    {log.attacker}
                  </span>
                  <span className="text-xs text-gray-400">vs</span>
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">
                    {log.defender}
                  </span>
                </div>

                <p className="text-sm text-gray-300 mb-1">{log.message}</p>

                <div className="flex items-center space-x-4 text-xs">
                  <span className="text-red-400">-{log.damage} DMG</span>
                  <span className="text-gray-400">
                    {log.defender} HP: {log.remainingHp}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isComplete && winner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 p-4 rounded-lg bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400 mb-2">
                🏆 VICTORY! 🏆
              </div>
              <div className="text-lg text-white">
                <span className="font-semibold text-amber-400">{winner}</span>{" "}
                wins the battle!
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default BattleLog;
