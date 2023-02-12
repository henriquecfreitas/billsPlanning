import React, { useContext, useMemo } from "react"

import { BillContext } from "@Bill"
import { ThemeContext } from "@Theme"

import { BillsFilterInput } from "@Components/organisms"
import { HomePageView } from "@Components/templates"
import { CreateBillAction } from "@Components/templates/BillForm"

const useMainPage = () => {
  const { billsListing } = useContext(BillContext)
  const { colors } = useContext(ThemeContext)

  const homePage = useMemo(() => ({
    titleKey: "home__title",
    pageView: React.createElement(HomePageView, { billsListing }),
    headerAction: React.createElement(CreateBillAction, { billsListing }),
    headerContent: React.createElement(BillsFilterInput),
  }), [billsListing, colors])

  return { homePage }
}

export default useMainPage
