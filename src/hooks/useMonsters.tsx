import type { Monster } from "@/common/types";
import { loadMonsters } from "@/lib/storage";
import { useEffect, useState } from "react";

function useMonsters() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedMonsters = loadMonsters();
    setMonsters(loadedMonsters);
    setIsLoading(false);
  }, []);

  return { isLoading, monsters };
}

export default useMonsters;
