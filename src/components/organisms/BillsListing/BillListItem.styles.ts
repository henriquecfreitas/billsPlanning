import { StyleSheet } from "react-native"
import { ColorMap } from "@Theme"

import CreateSharedStyles from "@Utils/sharedStyles"

export default (themeColors: ColorMap) => {
  const sharedStyles = CreateSharedStyles(themeColors)
  return StyleSheet.create({
    container: {
      ...sharedStyles.boxShadow,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      paddingVertical: 16,
      paddingHorizontal: 12,
      backgroundColor: themeColors.white,
      borderRadius: 16,
      borderColor: themeColors.white,
    },
    deleteIcon: {
      flex: 1,
      textAlign: "right",
    },
    income: {
      fontWeight: "500",
      color: themeColors.green,
    },
    expense: {
      fontWeight: "500",
      color: themeColors.orange,
    },
  })
}
