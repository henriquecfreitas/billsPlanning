export type BillFormData = {
  name: string,
  code: string,
  kind: BillKind,
  active: boolean,
  parent?: Bill,
}

export type Bill = {
  id: string
  code: string
  name: string
  kind: BillKind
  active: boolean
  children?: Bill[]
}

export enum BillKind {
  Income = "income",
  Expense = "expense",
}
