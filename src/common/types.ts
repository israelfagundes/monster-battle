export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  speed: number;
  hp: number;
  maxHp: number;
  imageUrl: string;
}

export interface BattleLog {
  round: number;
  attacker: string;
  defender: string;
  damage: number;
  remainingHp: number;
  message: string;
}

export interface BattleResult {
  winner: Monster;
  loser: Monster;
  battleLogs: BattleLog[];
  totalRounds: number;
}

export interface BattleState {
  monster1: Monster;
  monster2: Monster;
  currentRound: number;
  battleLogs: BattleLog[];
  isComplete: boolean;
  winner: Monster | null;
}
