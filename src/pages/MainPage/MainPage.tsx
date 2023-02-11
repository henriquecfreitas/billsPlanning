import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { LocaleContext } from "@Locale"
import { ThemeContext } from "@Theme"

import { Icon } from "@Components/atoms"
import { BillsFilterInput, NavigationController } from "@Components/organisms"
import { HomePageView, SessionBar } from "@Components/templates"

import Styles from "./MainPage.styles"

const MainPage: React.FC = () => {
  const {
    strings: {
      home__title,
    },
  } = useContext(LocaleContext)
  const { colors } = useContext(ThemeContext)

  const navigation = useMemo(() => ({
    home: {
      title: home__title,
      pageView: <HomePageView />,
      headerAction: (
        <Icon name="plus" size={24} color={colors.bg_text_accent} />
      ),
      headerContent: <BillsFilterInput />,
    }
  }), [home__title])

  return (
    <View style={Styles.container}>
      <SessionBar />
      <NavigationController page={navigation.home}/>
    </View>
  )
}

export { MainPage }
