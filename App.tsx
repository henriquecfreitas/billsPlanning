import React, { PropsWithChildren, useContext } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

import { AuthContext, AuthContextProvider } from "@Auth"
import { LocaleContextProvider } from "@Locale"

import MainPage from "@Pages/MainPage"
import LoginPage from "@Pages/LoginPage"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

function App() {
  const { hasSession } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      {React.createElement(hasSession ? MainPage : LoginPage)}
      <StatusBar style="auto" />
    </View>
  )
}


const appWithContextProviders = (...providers: React.FC<PropsWithChildren>[]) =>
  providers.reduce((acc, Provider) => <Provider>{acc}</Provider>,
  <App />
)

export default () => appWithContextProviders(
  LocaleContextProvider,
  AuthContextProvider,
)
