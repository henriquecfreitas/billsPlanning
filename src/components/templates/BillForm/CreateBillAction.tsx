import React from "react"

import { IconAction } from "@Components/molecules"

import usePushBillFormPage from "./usePushBillFormPage"

const CreateBillAction: React.FC = () => {
  const { pushBillFormPage } = usePushBillFormPage()

  return <IconAction icon="plus" onPress={() => pushBillFormPage()}/>
}

export default CreateBillAction
