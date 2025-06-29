import type { Monster } from "@/common/types";

export type SelectionStatusProps = {
  selectedMonsters: Monster[];
  onStartBattle: () => void;
}