import React from "react"
import { Bill } from "../Bill"

export type BillContextData = {
  billsListing: Bill[],
}

type BillContextDispatch = {
  deleteBill: (billId: string) => void,
  filterBills: (content: string) => void,
}

type BillContextValue = BillContextData & BillContextDispatch

const BillContext = React.createContext<BillContextValue>({
  billsListing: [],
  deleteBill: (_: string) => {},
  filterBills: (_: string) => {},
})

export { BillContext }
