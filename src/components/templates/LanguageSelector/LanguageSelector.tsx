import React, { useContext } from "react"
import { TouchableOpacity, View } from "react-native"

import { LocaleContext, SupportedLocale } from "@Locale"

import { Gap, Text } from "@Components/atoms"

import Styles from "./LanguageSelector.styles"

const LanguageSelector: React.FC = () => {
  const languages = {
    "pt-BR": "🇧🇷",
    "en": "🇬🇧",
    "es": "🇪🇸",
  } as { [K in SupportedLocale]: string }

  const { current, setLanguage } = useContext(LocaleContext)

  return (
    <View style={Styles.contianer}>
      {Object.entries(languages).map((
        [key, child]: [SupportedLocale, string],
        idx,
      ) => key != current && <React.Fragment key={key}>
        {(idx > 0) && <Gap.Horizontal value={4} />}
        <TouchableOpacity
          style={Styles.button}
          onPress={() => setLanguage(key)}
        >
          <Text style={Styles.flag}>{child}</Text>
        </TouchableOpacity>
      </React.Fragment>)}
    </View>
  )
}

export default LanguageSelector
