import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import type { HPBarProps } from "@/components/HPBar/types";

function HPBar({
  currentHp,
  maxHp,
  className,
  showText = true,
  size = "md",
}: HPBarProps) {
  const percentage = Math.max(0, Math.min(100, (currentHp / maxHp) * 100));

  const sizeClasses = {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  };

  const getHpColor = (percentage: number) => {
    if (percentage > 60) return "bg-green-500";
    if (percentage > 30) return "bg-yellow-500";
    if (percentage > 15) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className={cn("w-full", className)}>
      {showText && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-300">HP</span>
          <span className="text-sm font-mono text-white">
            {currentHp} / {maxHp}
          </span>
        </div>
      )}

      <div
        className={cn(
          "relative overflow-hidden rounded-full bg-gray-700 border border-gray-600",
          sizeClasses[size]
        )}
      >
        <motion.div
          className={cn(
            "hp-bar absolute left-0 top-0 h-full rounded-full transition-colors duration-300",
            getHpColor(percentage)
          )}
          initial={{ width: "100%" }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "tween",
          }}
        />

        {/* Glow effect */}
        <motion.div
          className={cn(
            "absolute left-0 top-0 h-full rounded-full opacity-50 blur-sm",
            getHpColor(percentage)
          )}
          initial={{ width: "100%" }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            type: "tween",
          }}
        />
      </div>
    </div>
  );
}

export default HPBar;
