import type { Monster } from "@/common/types";
import { useEffect, useState } from "react";

function useBattle() {
  const [battleMonsters, setBattleMonsters] = useState<Monster[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("battleMonsters");
      if (stored) {
        const monsters = JSON.parse(stored) as Monster[];
        if (monsters.length === 2) {
          setBattleMonsters(monsters);
        }
      }
    } catch (error) {
      console.error("Failed to load battle monsters:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { battleMonsters, isLoading };
}

export default useBattle;
