import React, { useEffect, useState } from "react"

import mockBillsListing from "../mockBillsListing"

import { BillContext, BillContextData } from "./BillContext"
import findBill from "../findBills"

const defaultData: BillContextData = {
  billsListing: mockBillsListing,
}

const BillContextProvider: React.FC<React.PropsWithChildren> = props => {
  const [contextData, setContextData] = useState(defaultData)
  const [filteredBills, setFilteredBills] = useState(defaultData.billsListing)

  const filterBills = (content: string) => {
    setFilteredBills(
      contextData.billsListing.filter(({ name }) =>
        name.toUpperCase().includes(content.toUpperCase())
      )
    )
  }

  const deleteBill = (billId: string) => {
    const { billsListing } = contextData
    const billInfo = findBill(
      billsListing,
      ({ id }) => id === billId,
    )

    if (billInfo) {
      billInfo.finalLevelBills.splice(billInfo.index, 1)
      setContextData({ billsListing })
    }
  }

  const billContext = {
    billsListing: filteredBills,
    deleteBill,
    filterBills,
  }

  return <BillContext.Provider value={billContext} {...props} />
}

export { BillContextProvider }
