import React from "react"
import { Bill } from "@Bill"

type Props = {
  bill: Bill,
}
const BillListItem: React.FC<Props> = ({ bill }) => {
  const {
    name,
    code,
    children,
  } = bill

  return <>
    {`${code} - ${name}`}
    {children.map(bill => (
      <BillListItem key={bill.id} bill={bill}/>
    ))}
  </>
}

export default BillListItem
