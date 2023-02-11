import React from "react"
import { Bill } from "@Bill"
import BillListItem from "./BillListItem"

type Props = {
  bills: Bill[],
}
const BillsListing: React.FC<Props> = ({ bills }) => {
  return <>
    {bills.map(bill => (
      <BillListItem key={bill.id} bill={bill} />
    ))}
  </>
}

export default BillsListing
