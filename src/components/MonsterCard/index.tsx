import { Heart, Shield, Sword, Trash2, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import type { MonsterCardProps } from "@/components/MonsterCard/types";
import MonsterImage from "@/components/MonsterImage";

function MonsterCard({
  monster,
  isSelected,
  onSelect,
  onDelete,
  showDeleteButton = true,
  className,
}: MonsterCardProps) {
  return (
    <div
      className={cn(
        "monster-card relative rounded-lg bg-gray-800 p-4 shadow-lg border border-gray-700",
        isSelected && "selected-monster",
        onSelect && "cursor-pointer",
        className
      )}
      onClick={() => onSelect?.(monster)}
    >
      {/* Delete Button */}
      {showDeleteButton && onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(monster);
          }}
          className="absolute top-2 right-2 z-10 rounded-full bg-red-600 p-1 text-white hover:bg-red-700 transition-colors"
          title="Delete Monster"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      )}

      <MonsterImage src={monster.imageUrl} alt={monster.name} />

      {/* Monster Name */}
      <h3 className="font-bold text-lg text-amber-400 mb-3 text-center">
        {monster.name}
      </h3>

      {/* Stats */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-300">HP</span>
          </div>
          <span className="text-sm font-medium text-white">{monster.hp}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sword className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-300">Attack</span>
          </div>
          <span className="text-sm font-medium text-white">
            {monster.attack}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-300">Defense</span>
          </div>
          <span className="text-sm font-medium text-white">
            {monster.defense}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Speed</span>
          </div>
          <span className="text-sm font-medium text-white">
            {monster.speed}
          </span>
        </div>
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute inset-0 rounded-lg bg-amber-400/10 pointer-events-none" />
      )}
    </div>
  );
}

export default MonsterCard;
