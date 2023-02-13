import { useContext, useEffect, useMemo, useState } from "react"

import { Bill, BillFormData, BillKind, flatBills, findBill, BillContext } from "@Bill"
import { LocaleContext, StringMap } from "@Locale"

import { SelectItem } from "@Components/organisms/FormInput"

type UseBillForm = (params: {
    selectedBill?: Bill,
    bills: Bill[],
}) => {
  strings: StringMap,
  parentBillOptions: SelectItem<Bill, string>[],
  billKindOptions: SelectItem<BillKind, string>[],
  activeStatusOptions: SelectItem<boolean, boolean>[],
  setParent: (parent: Bill) => void,
  setName: (name: string) => void,
  setCode: (code: string) => void,
  setKind: (kind: BillKind) => void,
  setActive: (active: boolean) => void,
} & BillFormData

const useBillForm: UseBillForm = ({ selectedBill, bills }) => {
  const { formData, setFormData } = useContext(BillContext)
  const { strings } = useContext(LocaleContext)

  const validParentBills = useMemo(() => (
    bills.flatMap(flatBills(selectedBill))
  ), [selectedBill, bills])

  const parentBillOptions = useMemo(() => (
    validParentBills.map(bill => ({
        label: `${bill.code} - ${bill.name}`,
        value: bill.id,
        origin: bill,
      }))
  ), [validParentBills])

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

  const setParent = (parent: Bill) => {
    setFormData({ ...formData, parent })
  }
  const setName = (name: string) => {
    setFormData({ ...formData, name })
  }
  const setCode = (code: string) => {
    setFormData({ ...formData, code })
  }
  const setKind = (kind: BillKind) => {
    setFormData({ ...formData, kind })
  }
  const setActive = (active: boolean) => {
    setFormData({ ...formData, active })
  }

  useEffect(() => {
    const parent = !selectedBill ? undefined :
      findBill(
        validParentBills,
        ({ children }) => children && !!children.find(({ id }) => id === selectedBill.id)
      )?.bill
    const name = selectedBill?.name || ""
    const code = selectedBill?.code || ""
    const kind = selectedBill?.kind || BillKind.Income
    const active = selectedBill ? selectedBill.active : false
    setFormData({ parent, name, code, kind, active })
  }, [selectedBill, validParentBills])

  // useEffect(() => {
  //   const { children } = formData.parent
  //   if (children?.length) {
  //     const greatestCode = children.reduce((acc, current) => {
  //       return greatestCode.
  //     }, formData.parent.code)
      
  //   }
  // }, [formData.parent])
  //
  return {
    ...formData,
    setParent,
    setName,
    setCode,
    setKind,
    setActive,
    strings,
    parentBillOptions,
    billKindOptions,
    activeStatusOptions,
  }
}

export default useBillForm
