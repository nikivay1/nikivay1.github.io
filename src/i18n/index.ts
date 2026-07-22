import { en } from './locales/en';
import { es } from './locales/es';
import { ru } from './locales/ru';
import type { Locale, PortfolioContent } from './types';

export const locales = ['en', 'ru', 'es'] as const satisfies readonly Locale[];

export const content = { en, ru, es } satisfies Record<Locale, PortfolioContent>;

export function getContent(locale: Locale): PortfolioContent {
  return content[locale];
}

export type * from './types';
