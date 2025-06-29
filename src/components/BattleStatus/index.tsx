import { motion } from "framer-motion";
import { Swords } from "lucide-react";

function BattleStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-8 text-center"
    >
      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-400/20 border border-amber-400">
        <Swords className="h-5 w-5 text-amber-400 animate-pulse" />
        <span className="text-amber-400 font-medium">
          Battle in Progress...
        </span>
      </div>
    </motion.div>
  );
}

export default BattleStatus;
