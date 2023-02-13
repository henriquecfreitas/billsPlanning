import React from "react"
import { Bill, BillFormData, BillKind } from "../Bill"

export type BillContextData = {
  selectedBill?: Bill,
  formData: BillFormData,
  billsListing: Bill[],
}

type BillContextDispatch = {
  addBill: (formData: BillFormData) => void,
  editBill: (bill: Bill, formData: BillFormData) => void,
  setFormData: (formData: BillFormData) => void,
  selectBill: (bill: Bill) => void,
  deleteBill: (billId: string) => void,
  filterBills: (content: string) => void,
}

type BillContextValue = BillContextData & BillContextDispatch

const BillContext = React.createContext<BillContextValue>({
  selectedBill: undefined,
  formData: {
    parent: undefined,
    name: "",
    code: "",
    kind: BillKind.Income,
    active: true, 
  },
  billsListing: [],
  addBill: (_: Bill) => {},
  editBill: (_: Bill) => {},
  setFormData: (_: BillFormData) => {},
  selectBill: (_: Bill) => {},
  deleteBill: (_: string) => {},
  filterBills: (_: string) => {},
})

export { BillContext }
