import { StyleSheet } from "react-native"
import { ColorMap } from "@Theme"
import { normalizeFontSize } from "./responsive"

export default (themeColors: ColorMap) => StyleSheet.create({
  boxShadow: {
    borderColor: `${themeColors.text_light}A`,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 8,
    borderRadius: 8,
    color: themeColors.text_alternative,
    backgroundColor:  themeColors.white,
  },
  input: {
    flex: 1,
    fontSize: normalizeFontSize(14),
    color: themeColors.text,
  },
})
