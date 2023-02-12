import { StyleSheet } from "react-native"
import { ColorMap } from "@Theme"

export default (themeColors: ColorMap) => {
  return StyleSheet.create({
    inputContainer: {
      padding: 16,
      borderRadius: 32,
      borderColor: `${themeColors.dark_gray}C`,
    }
  })
}
