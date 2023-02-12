import React from "react"
import { View } from "react-native"

import { NavigationController } from "@Components/organisms"
import { SessionBar } from "@Components/templates"

import Styles from "./MainPage.styles"
import useMainPage from "./useMainPage"

const MainPage: React.FC = () => {
  const { homePage } = useMainPage()

  return (
    <View style={Styles.container}>
      <SessionBar />
      <NavigationController rootPage={homePage} />
    </View>
  )
}

export { MainPage }
