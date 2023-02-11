import { StyleSheet } from "react-native"
import { ColorMap } from "@Theme"

export default (themeColors: ColorMap) => StyleSheet.create({
  boxShadow: {
    borderColor: `${themeColors.dark_gray}C`,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
})
