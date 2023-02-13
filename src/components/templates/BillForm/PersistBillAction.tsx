import React, { useContext } from "react"

import { BillContext } from "@Bill"

import { IconAction } from "@Components/molecules"
import { NavigationContext } from "@Components/organisms/NavigationController"

const PersistBillAction: React.FC = () => {
  const { selectedBill, formData, addBill, editBill } = useContext(BillContext)
  const { popPage } = useContext(NavigationContext)

  return <IconAction icon="check" onPress={() => {
    selectedBill ? editBill(selectedBill, formData) : addBill(formData)
    popPage()
  }}/>
}

export default PersistBillAction
