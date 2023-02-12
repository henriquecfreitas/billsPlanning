import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { BillContext } from "@Bill"
import { LocaleContext } from "@Locale"
import { ThemeContext } from "@Theme"

import { Icon } from "@Components/atoms"
import { BillsFilterInput, NavigationController } from "@Components/organisms"
import { BillForm, HomePageView, SessionBar } from "@Components/templates"

import Styles from "./MainPage.styles"

const MainPage: React.FC = () => {
  const {
    strings: {
      home__title,
      bill_detail__title,
    },
  } = useContext(LocaleContext)
  const { billsListing } = useContext(BillContext)
  const { colors } = useContext(ThemeContext)

  const navigation = useMemo(() => ({
    home: {
      title: home__title,
      pageView: <HomePageView bills={billsListing} />,
      headerAction: (
        <Icon name="plus" size={24} color={colors.bg_text_accent} />
      ),
      headerContent: <BillsFilterInput />,
    },
    bill: {
      title: bill_detail__title,
      pageView: <BillForm
        bill={billsListing[0]}
        bills={billsListing}
      />,
      headerAction: (
        <Icon name="check" size={24} color={colors.bg_text_accent} />
      ),
    },
  }), [home__title])

  return (
    <View style={Styles.container}>
      <SessionBar />
      <NavigationController pageStack={[navigation.home, navigation.bill]} />
    </View>
  )
}

export { MainPage }
