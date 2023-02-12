import React, { useContext } from "react"
import { Touchable, TouchableWithoutFeedback, View } from "react-native"

import { ThemeContext } from "@Theme"

import CreateStyles from "./ModalView.styles"
import { ModalViewContext } from "./context/ModalViewContext"

const ModalView: React.FC = () => {
  const { colors } = useContext(ThemeContext)
  const {
    hasContext,
    isOpen,
    view,
    closeModal,
  } = useContext(ModalViewContext)

  const styles = CreateStyles(colors)

  if (!hasContext) {
    console.error("ModalView component should only be rendered " +
    "under a ModalViewContextProvider")
    return null
  }
  
  return isOpen && (
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            {view}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ModalView
