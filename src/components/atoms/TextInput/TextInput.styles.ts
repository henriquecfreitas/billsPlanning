import { StyleSheet } from "react-native"

import { ColorMap } from "@Theme"

import { normalizeFontSize } from "@Utils/responsive"
import CreateSharedStyles from "@Utils/sharedStyles"

export default (themeColors: ColorMap) => {
  const sharedStyles = CreateSharedStyles(themeColors)
  return StyleSheet.create({
    inputContainer: {
      ...sharedStyles.boxShadow,
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: 16,
      padding: 16,
      borderRadius: 32,
      color: themeColors.text_alternative,
      backgroundColor:  themeColors.white,
    },
    input: {
      flex: 1,
      fontSize: normalizeFontSize(14),
      color: themeColors.text_dark,
    }
  })
}
