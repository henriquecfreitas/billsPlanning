import React, { useCallback, useContext, useMemo } from "react"

import { Bill, BillContext } from "@Bill"
import { LocaleContext } from "@Locale"
import { ThemeContext } from "@Theme"

import { Icon } from "@Components/atoms"
import { BillsFilterInput } from "@Components/organisms"
import { BillForm, HomePageView } from "@Components/templates"

const useMainPage = () => {
  const {
    strings: {
      home__title,
      bill_detail__title,
    },
  } = useContext(LocaleContext)
  const { billsListing } = useContext(BillContext)
  const { colors } = useContext(ThemeContext)
  
    const createBillFormPage = useCallback((bill: Bill) => ({
      title: bill_detail__title,
      pageView: React.createElement(BillForm, {
        selectedBill: bill,
        bills: billsListing
      }),
      headerAction: React.createElement(Icon, {
        name: "check",
        size: 24,
        color: colors.bg_text_accent
      }),
    }), [bill_detail__title, billsListing, colors])

  const homePage = useMemo(() => ({
    title: home__title,
    pageView: React.createElement(HomePageView, {
      bills: billsListing,
      pushBillForm: createBillFormPage,
    }),
    headerAction: React.createElement(Icon, {
      name: "plus",
      size: 24,
      color: colors.bg_text_accent
    }),
    headerContent: React.createElement(BillsFilterInput),
  }), [home__title, billsListing, colors])

  return { homePage }
}

export default useMainPage
