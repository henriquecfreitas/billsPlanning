import React, { useContext } from "react"
import { Button, Text, View } from "react-native"

import { AuthContext } from "@Auth"
import { LocaleContext } from "@Locale"

const HomePageView: React.FC = () => {
  const { strings: {
    login,
  } } = useContext(LocaleContext)

  const { endSession } = useContext(AuthContext)

  return (
    <View>
      <Text>Home</Text>
      <Button title={login} onPress={() => endSession()} />
    </View>
  )
}

export { HomePageView }
