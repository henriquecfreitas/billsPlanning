import React from "react"
import { View } from "react-native"

import { Bill } from "@Bill"

import { FormInput } from "@Components/molecules"

import Styles from "./BillForm.styles"
import useBillForm from "./useBillForm"

type Props = {
  selectedBill?: Bill,
  bills: Bill[],
}
const BillForm: React.FC<Props> = ({
  selectedBill,
  bills,
}) => {
  const {
    name,
    code,
    kind,
    active,
    strings,
    parentBillOptions,
    billKindOptions,
    activeStatusOptions,
  } = useBillForm({ selectedBill, bills })

  return <View style={Styles.container}>
    <FormInput.Select
      title={strings.bill_form__parent}
      items={parentBillOptions}
      onValueChange={()=>{}}
    />
    <FormInput
      title={strings.bill_form__code}
      placeholder="1.1"
      value={code}
    />
    <FormInput
      title={strings.bill_form__name}
      placeholder={strings.bill_form__contingency_fund}
      value={name}
    />
    <FormInput.Select
      title={strings.bill_form__kind}
      items={billKindOptions}
      value={kind}
      onValueChange={()=>{}}
    />
    <FormInput.Select
      title={strings.bill_form__active}
      items={activeStatusOptions}
      value={active}
      onValueChange={()=>{}}
    />
  </View>
}

export default BillForm
