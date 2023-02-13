import React, { useContext } from "react"
import { View } from "react-native"

import { Button, Gap } from "@Components/atoms"
import { TextInput } from "@Components/molecules"

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
      <Gap.Vertical value={12} />
      <TextInput placeholder={password}/>
      <Gap.Vertical value={12} />
      <Button.OverBG label={login} onPress={() => setSession()} />
    </View>
  )
}

export default LoginPageView
