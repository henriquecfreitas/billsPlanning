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
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: themeColors.white,
      borderRadius: 16,
      borderColor: themeColors.white,
    },
    descriptionLabel: {
      flex: 1,
    },
    deleteIcon: {
      padding: 8,
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
