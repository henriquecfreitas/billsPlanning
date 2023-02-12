import { useContext, useMemo } from "react"

import { Bill, BillKind, flatBills } from "@Bill"
import { LocaleContext, StringMap } from "@Locale"

type UseBillForm = (params: {
    selectedBill?: Bill,
    bills: Bill[],
}) => {
  strings: StringMap,
  parentBillOptions: any[],
  billKindOptions: any[],
  activeStatusOptions: any[],
} & Pick<Bill, 'name' | 'code' | 'kind' | 'active'>

const useBillForm: UseBillForm = ({ selectedBill, bills }) => {
  const { strings } = useContext(LocaleContext)

  const parentBillOptions = useMemo(() => (
    bills
      .flatMap(flatBills(selectedBill))
      .map(bill => ({
        label: `${bill.code} - ${bill.name}`,
        value: bill.id,
        origin: bill,
      }))
  ), [selectedBill, bills])

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

  const {
    name,
    code,
    kind,
    active,
  } = selectedBill || {}

  return {
    name,
    code,
    kind,
    active,
    strings,
    parentBillOptions,
    billKindOptions,
    activeStatusOptions,
  }
}

export default useBillForm
