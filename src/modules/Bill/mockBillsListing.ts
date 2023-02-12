import { BillKind } from "./Bill"

export const baseBills = [
  { id: "A-000", code: "1",  name: "Receitas", kind: BillKind.Income, active: true, children: [] },
  { id: "A-900", code: "2",  name: "Despesas", kind: BillKind.Expense, active: true, children: [] },
]

export const customBills = [
  { parent: "A-000", id: "001", code: "1.1",   name: "Taxa condominial",       kind: BillKind.Income, active: true, children: [] },
  { parent: "A-000", id: "002", code: "1.2",   name: "Fundo de reserva",       kind: BillKind.Income, active: true, children: [] },
  { parent: "A-000", id: "003", code: "1.3",   name: "Multas",                 kind: BillKind.Income, active: true, children: [] },
  { parent: "A-900", id: "901", code: "2.1",   name: "Com pessoal",            kind: BillKind.Expense, active: true, children: [
    { id: "902", code: "2.1.1", name: "Salário",                kind: BillKind.Expense, active: true, children: [] },
    { id: "903", code: "2.1.2", name: "Adiantamento salarial",  kind: BillKind.Expense, active: true, children: [] },
  ]},
]
