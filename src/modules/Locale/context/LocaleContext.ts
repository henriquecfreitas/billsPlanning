import React from "react"

import { SupportedLocale } from "../strings"
import StringMap, { originStringMap } from "../stringMap"

export type LocaleContextData = {
  strings: StringMap
}

type LocaleContextDispatch = {
  setLanguage: (locale: SupportedLocale) => void
}

type LocaleContextValue = LocaleContextData & LocaleContextDispatch

const LocaleContext = React.createContext<LocaleContextValue>({
  strings: originStringMap,
  setLanguage: (_: SupportedLocale) => {},
})

export { LocaleContext }
