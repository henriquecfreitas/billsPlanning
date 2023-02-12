import { createElement, useCallback, useContext } from "react"

import { Bill, BillContext } from "@Bill"
import { LocaleContext } from "@Locale"
import { ThemeContext } from "@Theme"

import { Icon } from "@Components/atoms"
import { NavigationContext } from "@Components/organisms/NavigationController"

import BillForm from "./BillForm"

function usePushBillFormPage() {
  const { billsListing } = useContext(BillContext)
  const { strings } = useContext(LocaleContext)
  const { colors } = useContext(ThemeContext)
  const { pushPage } = useContext(NavigationContext)

  const pushBillFormPage = useCallback((bill?: Bill) => pushPage({
    titleKey: bill ? "bill_form_detail__title" : "bill_form_create__title",
    pageView: createElement(BillForm, {
      selectedBill: bill,
      bills: billsListing
    }),
    headerAction: createElement(Icon, {
      name: "check",
      size: 24,
      color: colors.bg_text_accent
    }),
  }), [ strings, colors, pushPage ])

  return { pushBillFormPage }
}

export default usePushBillFormPage
