import React from "react"
import { Bill } from "../Bill"

export type BillContextData = {
  billsListing: Bill[],
}

type BillContextDispatch = {}

type BillContextValue = BillContextData & BillContextDispatch

const BillContext = React.createContext<BillContextValue>({
  billsListing: [],
})

export { BillContext }
