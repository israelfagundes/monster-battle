import type { Monster } from '@/common/types';

const STORAGE_KEY = 'monster-battle-data';

export function saveMonsters(monsters: Monster[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(monsters));
  } catch (error) {
    console.error('Failed to save monsters to localStorage:', error);
  }
}

export function loadMonsters(): Monster[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    const monsters = JSON.parse(data);
    return Array.isArray(monsters) ? monsters : [];
  } catch (error) {
    console.error('Failed to load monsters from localStorage:', error);
    return [];
  }
}

export function addMonster(monster: Monster): Monster[] {
  const monsters = loadMonsters();
  const newMonsters = [...monsters, monster];
  saveMonsters(newMonsters);
  return newMonsters;
}

export function deleteMonster(id: string): Monster[] {
  const monsters = loadMonsters();
  const filteredMonsters = monsters.filter(m => m.id !== id);
  saveMonsters(filteredMonsters);
  return filteredMonsters;
}

export function updateMonster(updatedMonster: Monster): Monster[] {
  const monsters = loadMonsters();
  const updatedMonsters = monsters.map(m =>
    m.id === updatedMonster.id ? updatedMonster : m
  );
  saveMonsters(updatedMonsters);
  return updatedMonsters;
}
