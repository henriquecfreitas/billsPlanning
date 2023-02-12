import React from "react"
import { View } from "react-native"

import { Bill } from "@Bill"

import BillListItem from "./BillListItem"
import Styles from "./BillListing.styles"

type Props = {
  bills: Bill[],
  onSelectBill?: (bill: Bill) => void,
}
const BillsListing: React.FC<Props> = ({
  bills,
  onSelectBill,
}) => {
  return <View style={Styles.container}>
    {bills.map(bill => (
      <BillListItem
        key={bill.id}
        bill={bill}
        onSelect={onSelectBill}
      />
    ))}
  </View>
}

export default BillsListing
