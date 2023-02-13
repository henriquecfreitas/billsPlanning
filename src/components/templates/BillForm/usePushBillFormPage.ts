import { createElement, useCallback, useContext } from "react"

import { Bill, BillContext } from "@Bill"
import { LocaleContext } from "@Locale"
import { ThemeContext } from "@Theme"

import { NavigationContext } from "@Components/organisms/NavigationController"

import BillForm from "./BillForm"
import PersistBillAction from "./PersistBillAction"

function usePushBillFormPage() {
  const { billsListing } = useContext(BillContext)
  const { strings } = useContext(LocaleContext)
  const { colors } = useContext(ThemeContext)
  const { pushPage } = useContext(NavigationContext)

  const pushBillFormPage = useCallback((bill?: Bill) => {
    pushPage({
      titleKey: bill ? "bill_form_detail__title" : "bill_form_create__title",
      pageView: createElement(BillForm, {
        selectedBill: bill,
        bills: billsListing
      }),
      headerAction: createElement(PersistBillAction),
    })
  }, [ strings, colors, pushPage ])

  return { pushBillFormPage }
}

export default usePushBillFormPage
