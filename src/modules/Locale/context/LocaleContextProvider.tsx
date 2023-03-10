import React, { useState } from "react"

import { LocaleContext, LocaleContextData } from "./LocaleContext"
import { locales, defaultLocale, SupportedLocale } from "../strings"

const defaultData: LocaleContextData = {
  current: "pt-BR",
  strings: locales[process.env['LOCALIZATION']] || locales[defaultLocale],
}

const LocaleContextProvider: React.FC<React.PropsWithChildren> = props => {
  const [contextData, setContextData] = useState(defaultData)

  const setLanguage = (locale: SupportedLocale) => {
    const strings = locales[locale]
    setContextData({
      current: locale,
      strings,
    })
  }

  const localeContext = {
    ...contextData,
    setLanguage,
  }

  return <LocaleContext.Provider value={localeContext} {...props} />
}

export { LocaleContextProvider }
