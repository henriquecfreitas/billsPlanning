import { StyleSheet } from "react-native"

export default StyleSheet.create({
  sessionBar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sessionBarVoid: {
    flex: 1,
  },
  sessionBarItem: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  signoutIcon: {
    marginRight: 3,
  },
})
