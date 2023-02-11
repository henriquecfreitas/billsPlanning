import React from "react"
import { View } from "react-native"

import { Bill } from "@Bill"

import BillListItem from "./BillListItem"
import Styles from "./BillListing.styles"

type Props = {
  bills: Bill[],
}
const BillsListing: React.FC<Props> = ({ bills }) => {
  return <View style={Styles.container}>
    {bills.map(bill => (
      <BillListItem key={bill.id} bill={bill} />
    ))}
  </View>
}

export default BillsListing
