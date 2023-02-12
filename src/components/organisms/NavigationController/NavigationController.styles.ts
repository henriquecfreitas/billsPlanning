import { StyleSheet } from "react-native"
import { ColorMap } from "@Theme"
import { normalizeFontSize } from "@Utils/responsive"

export default (themeColors: ColorMap) => StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    flex: 1,
  },
  header: {
    padding: 16,
  },
  headerTitleContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: 12,
  },
  headerTitle: {
    flex: 1,
    fontSize: normalizeFontSize(18),
    fontWeight: "700",
    color: themeColors.bg_text_accent,
  },
  headerContentContainer: {
    paddingVertical: 16,
  },
  pageView: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    backgroundColor: themeColors.app__foreground,
  },
})
