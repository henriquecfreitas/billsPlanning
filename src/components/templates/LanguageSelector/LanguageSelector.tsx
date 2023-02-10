import React, { useContext } from "react"
import { Button, View } from "react-native"

import { LocaleContext, SupportedLocale } from "@Locale"

const LanguageSelector: React.FC = () => {
  const languages = {
    "pt-BR": "Português",
    "en": "English",
    "es": "Español",
  } as { [K in SupportedLocale]: string }

  const { setLanguage } = useContext(LocaleContext)

  return (
    <View>
      {Object.entries(languages).map((
        [key, child]: [SupportedLocale, string]
      ) => (
        <Button
          key={key}
          title={child}
          onPress={() => setLanguage(key)}
        />
      ))}
    </View>
  )
}

export { LanguageSelector }
