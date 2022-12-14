import { useCallback, useMemo, useRef } from "react";
import ru from "./translations/ru";
import { has } from "lodash";

const availableLocales = { ru };

type Key = keyof typeof ru;
type Locale = keyof typeof availableLocales;

const defaultLocale: Locale = "ru";

// TODO: replace with actual i18n lib
export const useI18n = (locale: Locale = defaultLocale) => {
  const translations = useMemo(() => availableLocales[locale], [locale]);

  const t = useCallback(
    (key: Key, args?: Record<string, unknown>): string => {
      return translations && has(translations, key) ? translations[key] : key;
    },
    [translations]
  );

  return { t };
};
