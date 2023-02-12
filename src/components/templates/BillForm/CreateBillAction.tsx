import React from "react"

import { Bill } from "@Bill"

import { AddAction } from "@Components/molecules"

import usePushBillFormPage from "./usePushBillFormPage"

type Props = {
  billsListing: Bill[]
}
const CreateBillAction: React.FC<Props> = ({ billsListing }) => {
  const { pushBillFormPage } = usePushBillFormPage({billsListing})

  return <AddAction onPress={() => pushBillFormPage()}/>
}

export default CreateBillAction
