import { ReactNode } from 'react';

export enum LanguageContextVariants {
  es = 'es',
}

export interface LanguageContextInterface {
  locale: LanguageContextVariants;
  setLanguage: (e: LanguageContextVariants) => void;
}

export interface LanguageProviderInterface {
  children: ReactNode;
}
