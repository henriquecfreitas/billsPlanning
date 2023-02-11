import { StyleSheet } from "react-native"
import { normalizeFontSize } from "@Utils/responsive"

export default StyleSheet.create({
  contianer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    paddingHorizontal: 16,
  },
  button: {
    width: "1.5rem",
    height: "1.5rem",
  },
  flag: {
    fontSize: normalizeFontSize(18),
  },
})