import React, { PropsWithChildren, useState } from "react"
import { View } from "react-native"

import { ModalViewContext, ModalViewContextData } from "./ModalViewContext"

type StateData = Omit<ModalViewContextData, "hasContext">
const ModalViewContextProvider: React.FC<PropsWithChildren> = props => {
  const [contextData, setContextData] = useState<StateData>({
    isOpen: false,
  })

  const openView = (view: React.ReactNode) => {
    setContextData({
      view,
      isOpen: true,
    })
  }

  const closeModal = () => {
    setContextData({
      isOpen: false,
    })
  }

  const modalViewContext = {
    ...contextData,
    hasContext: true,
    openView,
    closeModal,
  }

  return <ModalViewContext.Provider value={modalViewContext} {...props} />
}

export { ModalViewContextProvider }
