import { StyleSheet } from "react-native"
import { ColorMap } from "@Theme"

export default (themeColors: ColorMap) => StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  title: {
    color: themeColors.text,
    fontWeight: "500",
  },
  inputContainer: {
  },
  input: {
    color: themeColors.text,
  },
})
