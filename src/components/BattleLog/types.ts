import type { BattleLog } from "@/common/types";

export type BattleLogProps = {
  logs: BattleLog[];
  isComplete: boolean;
  winner?: string;
}
