import type { Monster } from "@/common/types";

export type MonsterCardProps = {
  monster: Monster;
  isSelected?: boolean;
  onSelect?: (monster: Monster) => void;
  onDelete?: (monster: Monster) => void;
  showDeleteButton?: boolean;
  className?: string;
}