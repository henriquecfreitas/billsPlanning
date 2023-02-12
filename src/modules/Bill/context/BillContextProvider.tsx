import React, { useEffect, useState } from "react"

import mockBillsListing from "../mockBillsListing"

import { BillContext, BillContextData } from "./BillContext"
import findBill from "../findBills"
import flatBills from "../flatBills"

const defaultData: BillContextData = {
  billsListing: mockBillsListing,
}

const BillContextProvider: React.FC<React.PropsWithChildren> = props => {
  const [contextData, setContextData] = useState(defaultData)
  const [filteredBills, setFilteredBills] = useState(defaultData.billsListing)
  const [filter, setFilter] = useState("")

  const filterBills = (content: string) => {
    setFilter(content)
    setFilteredBills(
      contextData.billsListing
      .flatMap(flatBills())
      .filter(({ name }) =>
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
      filterBills(filter)
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
