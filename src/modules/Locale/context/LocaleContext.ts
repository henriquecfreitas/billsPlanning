import React from "react"

import { SupportedLocale } from "../strings"
import StringMap, { originStringMap } from "../stringMap"

export type LocaleContextData = {
  current: SupportedLocale,
  strings: StringMap,
}

type LocaleContextDispatch = {
  setLanguage: (locale: SupportedLocale) => void
}

type LocaleContextValue = LocaleContextData & LocaleContextDispatch

const LocaleContext = React.createContext<LocaleContextValue>({
  current: null as SupportedLocale,
  strings: originStringMap,
  setLanguage: (_: SupportedLocale) => {},
})

export { LocaleContext }
