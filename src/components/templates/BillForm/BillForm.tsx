import React from "react"
import { View } from "react-native"

import { Bill } from "@Bill"

import { FormInput } from "@Components/molecules"

import Styles from "./BillForm.styles"
import useBillForm from "./useBillForm"

type Props = {
  bill: Bill,
  bills: Bill[],
}
const BillForm: React.FC<Props> = ({ bills }) => {
  const {
    strings,
    parentBillOptions,
    billKindOptions,
    activeStatusOptions,
  } = useBillForm({ bills })

  return <View style={Styles.container}>
    <FormInput.Select
      title={strings.bill_form__parent}
      items={parentBillOptions}
    />
    <FormInput
      title={strings.bill_form__code}
      placeholder="1.1"
    />
    <FormInput
      title={strings.bill_form__name}
      placeholder={strings.bill_form__contingency_fund}
    />
    <FormInput.Select
      title={strings.bill_form__kind}
      items={billKindOptions}
    />
    <FormInput.Select
      title={strings.bill_form__active}
      items={activeStatusOptions}
    />
  </View>
}

export default BillForm
