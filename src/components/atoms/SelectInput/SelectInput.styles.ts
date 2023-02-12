import { StyleSheet } from "react-native"

import { ColorMap } from "@Theme"

import CreateSharedStyles from "@Utils/sharedStyles"

export default (themeColors: ColorMap) => {
  const sharedStyles = CreateSharedStyles(themeColors)
  const {
    fontSize,
    color,
    flex: viewContainerFlex
  } = sharedStyles.input

  const viewStyles = StyleSheet.create({
    inputContainer: {
      ...sharedStyles.boxShadow,
      ...sharedStyles.inputContainer,
    },
  })
  
  const pickerStyles = StyleSheet.create({
    viewContainer: {
      flex: viewContainerFlex,
    },
    inputAndroid: {
      fontSize,
      color,
      borderWidth: 0,
      padding: 0,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputWeb: {
      fontSize,
      color,
      borderWidth: 0,
      padding: 0,
    },
    inputIOS: {
      fontSize,
      color,
      borderWidth: 0,
      padding: 0,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    placeholder: {
      color: themeColors.text_light,
    },
  })

  return { viewStyles, pickerStyles }
}
