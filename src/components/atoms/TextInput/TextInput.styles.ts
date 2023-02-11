import { StyleSheet } from "react-native"

import { ColorMap } from "@Theme"
import { normalizeFontSize } from "@Utils/responsive"

export default (themeColors: ColorMap) => StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 16,
    padding: 16,
    borderRadius: 32,
    color: themeColors.text_alternative,
    backgroundColor:  themeColors.white,
    borderColor: `${themeColors.dark_gray}C`,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: normalizeFontSize(14),
    color: themeColors.text_dark,
  }
})
