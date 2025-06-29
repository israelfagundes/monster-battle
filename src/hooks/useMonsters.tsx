import type { Monster } from "@/common/types";
import { deleteMonster, loadMonsters } from "@/lib/storage";
import { useEffect, useState } from "react";

function useMonsters() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [selectedMonsters, setSelectedMonsters] = useState<Monster[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedMonsters = loadMonsters();
    setMonsters(loadedMonsters);
    setIsLoading(false);
  }, []);

  const handleSelectMonster = (monster: Monster) => {
    setSelectedMonsters((prev) => {
      // If already selected, deselect
      if (prev.find((m) => m.id === monster.id)) {
        return prev.filter((m) => m.id !== monster.id);
      }

      // If less than 2 selected, add to selection
      if (prev.length < 2) {
        return [...prev, monster];
      }

      // If 2 already selected, replace the first one
      return [prev[1], monster];
    });
  };

  const handleDeleteMonster = (monster: Monster) => {
    if (confirm(`Are you sure you want to delete ${monster.name}?`)) {
      const updatedMonsters = deleteMonster(monster.id);
      setMonsters(updatedMonsters);

      // Remove from selection if it was selected
      setSelectedMonsters((prev) => prev.filter((m) => m.id !== monster.id));
    }
  };

  return {
    isLoading,
    monsters,
    handleSelectMonster,
    handleDeleteMonster,
    selectedMonsters,
  };
}

export default useMonsters;
