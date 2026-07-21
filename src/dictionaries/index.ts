export const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  bn: () => import('./bn.json').then((module) => module.default),
  ur: () => import('./ur.json').then((module) => module.default),
  si: () => import('./si.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale as keyof typeof dictionaries]) {
    return dictionaries.en();
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};
