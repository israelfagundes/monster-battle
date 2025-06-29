import type { Monster, BattleLog, BattleResult } from '@/common/types';

export function calculateBattleResult(monster1: Monster, monster2: Monster): BattleResult {
  const m1 = { ...monster1, hp: monster1.maxHp };
  const m2 = { ...monster2, hp: monster2.maxHp };

  const battleLogs: BattleLog[] = [];
  let round = 1;

  // Determine turn order: higher speed goes first, if tied, higher attack goes first
  let firstAttacker = m1;
  let secondAttacker = m2;

  if (m2.speed > m1.speed || (m2.speed === m1.speed && m2.attack > m1.attack)) {
    firstAttacker = m2;
    secondAttacker = m1;
  }

  while (m1.hp > 0 && m2.hp > 0) {
    if (firstAttacker.hp > 0 && secondAttacker.hp > 0) {
      const damage = Math.max(1, firstAttacker.attack - secondAttacker.defense);
      secondAttacker.hp = Math.max(0, secondAttacker.hp - damage);

      battleLogs.push({
        round,
        attacker: firstAttacker.name,
        defender: secondAttacker.name,
        damage,
        remainingHp: secondAttacker.hp,
        message: `${firstAttacker.name} attacks ${secondAttacker.name} for ${damage} damage!`
      });

      if (secondAttacker.hp <= 0) break;
    }

    if (secondAttacker.hp > 0 && firstAttacker.hp > 0) {
      const damage = Math.max(1, secondAttacker.attack - firstAttacker.defense);
      firstAttacker.hp = Math.max(0, firstAttacker.hp - damage);

      battleLogs.push({
        round,
        attacker: secondAttacker.name,
        defender: firstAttacker.name,
        damage,
        remainingHp: firstAttacker.hp,
        message: `${secondAttacker.name} attacks ${firstAttacker.name} for ${damage} damage!`
      });
    }

    round++;
  }

  const winner = m1.hp > 0 ? m1 : m2;
  const loser = m1.hp > 0 ? m2 : m1;

  return {
    winner: { ...winner, hp: winner.hp },
    loser: { ...loser, hp: loser.hp },
    battleLogs,
    totalRounds: round - 1
  };
}