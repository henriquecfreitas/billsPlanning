import { StyleSheet } from "react-native";
import { ColorMap } from "@Theme";

export default (themeColors: ColorMap) => StyleSheet.create({
  overlay: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0005",
  },
  container: {
    backgroundColor: themeColors.app__foreground,
    borderRadius: 8,
    paddingVertical: 32,
    paddingHorizontal: 16,
    width: "80%",
    maxWidth: 380,
  },
})
