import React from "react"

import { AddAction } from "@Components/molecules"

import usePushBillFormPage from "./usePushBillFormPage"

const CreateBillAction: React.FC = () => {
  const { pushBillFormPage } = usePushBillFormPage()

  return <AddAction onPress={() => pushBillFormPage()}/>
}

export default CreateBillAction
