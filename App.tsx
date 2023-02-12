import React, { PropsWithChildren, useContext, useMemo } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"

import { AuthContext, AuthContextProvider } from "@Auth"
import { BillContextProvider } from "@Bill"
import { LocaleContextProvider } from "@Locale"
import { ThemeContext, ThemeContextProvider } from "@Theme"

import MainPage from "@Pages/MainPage"
import LoginPage from "@Pages/LoginPage"


function App() {
  const { hasSession } = useContext(AuthContext)
  const { colors } = useContext(ThemeContext)
  
  const styles = useMemo(() => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.app__background,
      alignItems: "center",
      justifyContent: "center",
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI",
                  Roboto, Helvetica, Arial, sans-serif`,
    },
  }), [colors])

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
  AuthContextProvider,
  BillContextProvider,
  LocaleContextProvider,
  ThemeContextProvider,
)
