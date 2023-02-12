import React from "react"
import { View } from "react-native"

export type ModalViewContextData = {
  hasContext: boolean,
  isOpen: boolean,
  view?: React.ReactNode
}

type ModalViewContextDispatch = {
  openView: (view: React.ReactNode) => void
  closeModal: () => void
}

type ModalViewContextValue = ModalViewContextData & ModalViewContextDispatch

const ModalViewContext = React.createContext<ModalViewContextValue>({
  hasContext: false,
  isOpen: false,
  view: null,
  openView: (_: React.ReactNode) => {},
  closeModal: () => {},
})

export { ModalViewContext }
