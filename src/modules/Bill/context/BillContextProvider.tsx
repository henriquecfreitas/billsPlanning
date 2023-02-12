import React, { useEffect, useState } from "react"

import { baseBills, customBills } from "../mockBillsListing"

import { BillContext, BillContextData } from "./BillContext"

const defaultData: BillContextData = {
  billsListing: baseBills,
}

const BillContextProvider: React.FC<React.PropsWithChildren> = props => {
  const [contextData, setContextData] = useState(defaultData)

  useEffect(() => {
    const billsListing = [...baseBills]
    customBills.forEach(({ parent, ...bill }) => {
      if (parent) {
        const parentBill = billsListing.find(({ id }) => id === parent)
        parentBill.children.push(bill)
      }
    })
    setContextData({ billsListing })
  }, [setContextData])

  const billContext = {
    ...contextData,
  }

  return <BillContext.Provider value={billContext} {...props} />
}

export { BillContextProvider }
