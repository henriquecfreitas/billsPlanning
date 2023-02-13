import { Bill } from "./Bill"

type FindBillInfo = {
  bill?: Bill,
  finalLevelBills: Bill[],
  index?: number,
  childBill?: FindBillInfo,
  parentIndex?: number
}

const findBill: (
  billsListing: Bill[],
  predicate: (bill: Bill) => boolean,
) => FindBillInfo | undefined = (billsListing, predicate) => {
  for (let i = 0; i < billsListing.length; i++) {
    const bill = billsListing[i]
    if (predicate(bill)) {
      return {
        bill,
        index: i,
        finalLevelBills: billsListing,
      }
    } else {
      const childBill = findBill(bill.children || [], predicate)
      if (childBill) {
        return {
          childBill,
          index: childBill.index,
          finalLevelBills: childBill.finalLevelBills,
          parentIndex: i,
        }
      }
    }
  }
  return undefined
}

export default findBill
