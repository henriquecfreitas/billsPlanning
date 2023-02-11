export type Bill = {
  id: string,
  code: string,
  name: string,
  kind: BillKind,
  active: boolean,
  children?: Bill[],
}

export enum BillKind {
  Income = "income",
  Expense = "expense",
}
