import React, { useContext } from "react"
import { View } from "react-native"

import { AuthContext } from "@Auth"

import { Icon } from "@Components/atoms"
import { LanguageSelector } from "@Components/templates"

import Styles from "./SessionBar.styles"
import { ThemeContext } from "@Theme"

const SessionBar: React.FC = () => {
  const { endSession } = useContext(AuthContext)
  const { colors } = useContext(ThemeContext)

  return (
    <View style={Styles.sessionBar}>
      <View style={Styles.sessionBarVoid} />
      <View style={Styles.sessionBarItem}>
        <LanguageSelector />
      </View>
      <View style={Styles.sessionBarItem}>
        <Icon
          name="logout"
          size={18}
          color={colors.bg_text_accent}
          style={Styles.signoutIcon}
          onPress={() => endSession()}
        />
      </View>
    </View>
  )
}

export default SessionBar
