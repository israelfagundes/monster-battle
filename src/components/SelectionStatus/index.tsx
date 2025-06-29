import type { SelectionStatusProps } from "@/components/SelectionStatus/types";
import { Swords } from "lucide-react";

function SelectionStatus({
  selectedMonsters,
  onStartBattle,
}: SelectionStatusProps) {
  return (
    <div className="flex items-center justify-between min-h-[74px] mb-6 p-4 rounded-lg bg-gray-800 border border-gray-700">
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Swords className="h-5 w-5 text-amber-400" />
            <span className="text-white font-medium">
              Selected for Battle: {selectedMonsters.length}/2
            </span>
          </div>

          {selectedMonsters.length > 0 && (
            <div className="flex items-center">
              {selectedMonsters.map((monster, index) => (
                <span key={monster.id} className="text-amber-400 font-medium">
                  {monster.name}
                  {index < selectedMonsters.length - 1 && (
                    <span className="text-gray-400 mx-2">vs</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>

        {selectedMonsters.length === 2 && (
          <button
            onClick={onStartBattle}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-amber-400 text-gray-900 font-medium hover:bg-amber-300 transition-colors"
          >
            <Swords className="h-4 w-4" />
            <span>Start Battle!</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default SelectionStatus;
