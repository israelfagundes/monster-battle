import type { Monster } from "@/common/types";

export type MonsterCardProps = {
  monster?: Monster;
  isSelected?: boolean;
  onSelect?: () => void;
  onDelete?: () => void;
}