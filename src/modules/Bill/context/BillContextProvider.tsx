import React, { useState } from "react"

import billsListing from "../mockBillsListing"

import { BillContext, BillContextData } from "./BillContext"

const defaultData: BillContextData = {
  billsListing,
}

const BillContextProvider: React.FC<React.PropsWithChildren> = props => {
  const [contextData, setContextData] = useState(defaultData)

  const billContext = {
    ...contextData,
  }

  return <BillContext.Provider value={billContext} {...props} />
}

export { BillContextProvider }
