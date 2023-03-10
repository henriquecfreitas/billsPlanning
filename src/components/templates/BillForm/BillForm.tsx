import React from "react"
import { View } from "react-native"

import { Bill } from "@Bill"

import { FormInput } from "@Components/organisms"

import Styles from "./BillForm.styles"
import useBillForm from "./useBillForm"
import { Gap } from "@Components/atoms"

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
    setParent,
    setName,
    setCode,
    setKind,
    setActive,
    strings,
    parentBillOptions,
    billKindOptions,
    activeStatusOptions,
  } = useBillForm({ selectedBill, bills })

  return <View style={Styles.container}>
    <FormInput.Select
      title={strings.bill_form__parent}
      items={parentBillOptions}
      onValueChange={(_, __, parent) => { setParent(parent) }}
    />
    <Gap.Vertical value={8} />
    <FormInput
      title={strings.bill_form__code}
      placeholder="1.1"
      value={code}
      onChangeText={setCode}
    />
    <Gap.Vertical value={8} />
    <FormInput
      title={strings.bill_form__name}
      placeholder={strings.bill_form__contingency_fund}
      value={name}
      onChangeText={setName}
    />
    <Gap.Vertical value={8} />
    <FormInput.Select
      title={strings.bill_form__kind}
      items={billKindOptions}
      value={kind}
      onValueChange={(_, __, kind) => { setKind(kind) }}
    />
    <Gap.Vertical value={8} />
    <FormInput.Select
      title={strings.bill_form__active}
      items={activeStatusOptions}
      value={active}
      onValueChange={setActive}
    />
  </View>
}

export default BillForm
