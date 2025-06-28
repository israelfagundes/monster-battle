import { type ClassValue, clsx } from 'clsx'
import { v4 as UUID } from 'uuid'
import { twMerge } from 'tailwind-merge'

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}

export function generateId() {
  return UUID()
}