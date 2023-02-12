import React, { useContext, useMemo } from "react"

import { BillContext } from "@Bill"
import { ThemeContext } from "@Theme"

import { BillsFilterInput } from "@Components/organisms"
import { NavigationPage } from "@Components/organisms/NavigationController"
import { HomePageView } from "@Components/templates"
import { CreateBillAction } from "@Components/templates/BillForm"

const useMainPage = () => {
  const { colors } = useContext(ThemeContext)

  const homePage = useMemo(() => ({
    titleKey: "home__title",
    pageView: React.createElement(HomePageView),
    headerAction: React.createElement(CreateBillAction),
    headerContent: React.createElement(BillsFilterInput),
  } as NavigationPage ), [colors])

  return { homePage }
}

export default useMainPage
