import { Bill } from "./Bill"

const flatBills = (selectedBill?: Bill) => (
  function({ children, ...bill }: Bill): Bill[] {
    return selectedBill?.id === bill.id ? [] : [
      bill,
      ...(
        !children ? [] : children.flatMap(flatBills(selectedBill))
      ),
    ]
  }
)

export default flatBills
