import _ptBR from "./localized-strings/pt-BR"
import _en from "./localized-strings/en"
import _es from "./localized-strings/es"

export const defaultLocale: SupportedLocale = "pt-BR"

export type SupportedLocale = keyof typeof locales

export const locales = {
  "pt-BR": _ptBR,
  "en": _en,
  "es": _es,
}
