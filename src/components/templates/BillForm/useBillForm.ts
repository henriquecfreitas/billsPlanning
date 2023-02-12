import { useContext, useMemo } from "react"

import { Bill, BillKind } from "@Bill"
import { LocaleContext, StringMap } from "@Locale"

type UseBillForm = (params: {
    bills: Bill[]
}) => {
  strings: StringMap,
  parentBillOptions: any[],
  billKindOptions: any[],
  activeStatusOptions: any[],
}
const useBillForm: UseBillForm = ({ bills }) => {
  const { strings } = useContext(LocaleContext)

  const parentBillOptions = useMemo(() => [
    {
      label: "",
      value: undefined,
      origin: undefined,
    },
    ...bills.map(bill => ({
      label: `${bill.code} - ${bill.name}`,
      value: bill.id,
      origin: bill,
    }))
  ], [bills])

  const { billKindOptions, activeStatusOptions } = useMemo(() => ({
    billKindOptions: [
      {
        label: strings.income,
        value: BillKind.Income,
        origin: BillKind.Income,
      },
      {
        label: strings.expense,
        value: BillKind.Expense,
        origin: BillKind.Expense,
      },
    ],
    activeStatusOptions: [
      {
        label: strings.yes,
        value: true,
        origin: true
      },
      {
        label: strings.no,
        value: false,
        origin: false
      }
    ]
  }), [strings])

  return {
    strings,
    parentBillOptions,
    billKindOptions,
    activeStatusOptions,
  }
}

export default useBillForm
