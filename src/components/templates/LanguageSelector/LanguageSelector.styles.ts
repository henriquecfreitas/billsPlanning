import { StyleSheet } from "react-native"
import { normalizeFontSize } from "@Utils/responsive"

export default StyleSheet.create({
  contianer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  button: {
    width: normalizeFontSize(24),
    height: normalizeFontSize(24),
  },
  flag: {
    fontSize: normalizeFontSize(18),
  },
})