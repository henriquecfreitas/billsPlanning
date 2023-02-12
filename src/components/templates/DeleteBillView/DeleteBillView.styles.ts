import { normalizeFontSize } from "@Utils/responsive"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  textContent: {
    paddingVertical: 32,
    alignItems: "center",
    gap: 4,
  },
  cascadeDeleteInfo: {
    fontSize: normalizeFontSize(8),
    fontWeight: "500",
  },
})
