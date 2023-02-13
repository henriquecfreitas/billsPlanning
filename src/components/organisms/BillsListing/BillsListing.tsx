import React from "react"
import { View } from "react-native"

import { Bill } from "@Bill"

import { Gap } from "@Components/atoms"

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
    {bills.map((bill, idx) => <React.Fragment key={bill.id}>
      {(idx > 0) && <Gap.Vertical value={8} />}
      <BillListItem
        bill={bill}
        onSelect={onSelectBill}
      />
    </React.Fragment>)}
  </View>
}

export default BillsListing
