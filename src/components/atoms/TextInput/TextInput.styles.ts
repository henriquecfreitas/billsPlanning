import { StyleSheet } from "react-native"

import { ColorMap } from "@Theme"

import CreateSharedStyles from "@Utils/sharedStyles"

export default (themeColors: ColorMap) => {
  const sharedStyles = CreateSharedStyles(themeColors)
  return StyleSheet.create({
    inputContainer: {
      ...sharedStyles.boxShadow,
      ...sharedStyles.inputContainer,
    },
    input: {
      ...sharedStyles.input,
    }
  })
}
