import { StyleSheet } from "react-native"

import { ColorMap } from "@Theme"
import { normalizeFontSize } from "@Utils/responsive"

export default (colorMap: ColorMap) => StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    gap: 16,
  },
  listTitleContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  listTitle: {
    color: colorMap.text,
    fontSize: normalizeFontSize(18),
  },
  listInfo: {
    color: colorMap.text_alternative,
    fontSize: normalizeFontSize(12),
  }
})
