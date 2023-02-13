import React from "react"
import { StyleSheet, View } from "react-native"

export type Props = {
  direction: "vertical" | "horizontal",
  value: number,
}
const Gap: React.FC<Props> = ({ direction, value }) => {
  const marginKey = direction === "vertical" ? "marginTop" : "marginLeft"
  const { marginStyle } = StyleSheet.create({
    marginStyle: {
      [marginKey]: value,
    }
  })

  return <View style={marginStyle} />
}

export default Gap
