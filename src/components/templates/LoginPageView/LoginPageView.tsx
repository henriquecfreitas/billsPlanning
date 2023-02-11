import React, { useContext } from "react"
import { Button, TextInput, View } from "react-native"

import { AuthContext } from "@Auth"
import { LocaleContext } from "@Locale"

const LoginPageView: React.FC = () => {
  const { strings: {
    email,
    password,
    login,
  } } = useContext(LocaleContext)

  const { setSession } = useContext(AuthContext)

  return (
    <View>
      <TextInput placeholder={email}/>
      <TextInput placeholder={password}/>
      <Button title={login} onPress={() => setSession()} />
    </View>
  )
}

export default LoginPageView
