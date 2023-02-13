import React, { useState } from "react"
import { nanoid } from "nanoid"

import mockBillsListing from "../mockBillsListing"

import { BillContext, BillContextData } from "./BillContext"
import { Bill, BillFormData, BillKind } from "../Bill"
import findBill from "../findBill"
import flatBills from "../flatBills"

const defaultData: BillContextData = {
  selectedBill: undefined,
  formData: {
    parent: undefined,
    name: "",
    code: "",
    kind: BillKind.Income,
    active: true, 
  },
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

  const addBill = (formData: BillFormData) => {
    const { billsListing } = contextData
    const parentBillInfo = formData.parent && findBill(
      billsListing,
      ({ id }) => id === formData.parent.id,
    )

    if (parentBillInfo) {
      parentBillInfo.bill.children.push({
        id: nanoid(),
        ...formData
      })
    }
  }

  const editBill = (bill: Bill, formData: BillFormData) => {
    const { billsListing } = contextData
    const billInfo = findBill(
      billsListing,
      ({ id }) => id === bill.id,
    )

    if (billInfo) {
      billInfo.finalLevelBills[billInfo.index] = {
        ...bill,
        ...formData,
      }
      setContextData({
        ...contextData,
        billsListing,
      })
      filterBills(filter)
    }
  }

  const setFormData = (formData: BillFormData) => {
    setContextData({
      ...contextData,
      formData,
    })
  }

  const selectBill = (bill: Bill) => {
    setContextData({
      ...contextData,
      selectedBill: bill,
    })
  }

  const deleteBill = (billId: string) => {
    const { billsListing } = contextData
    const billInfo = findBill(
      billsListing,
      ({ id }) => id === billId,
    )

    if (billInfo) {
      billInfo.finalLevelBills.splice(billInfo.index, 1)
      setContextData({
        ...contextData,
        billsListing,
      })
      filterBills(filter)
    }
  }

  const billContext = {
    selectedBill: contextData.selectedBill,
    formData: contextData.formData,
    billsListing: filteredBills,
    addBill,
    editBill,
    setFormData,
    selectBill,
    deleteBill,
    filterBills,
  }

  return <BillContext.Provider value={billContext} {...props} />
}

export { BillContextProvider }
