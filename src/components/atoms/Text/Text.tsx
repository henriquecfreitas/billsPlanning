import React, { PropsWithChildren, useMemo } from "react"
import { Text as NativeText, StyleProp, TextStyle } from "react-native"

type Props = PropsWithChildren & {
  style?: StyleProp<TextStyle>,
  align?: "left" | "center" | "right"
}
const Text: React.FC<Props> = ({
  style,
  align = "left",
  ...props
}) => {
  const textStyle = useMemo(() => [style], [style])
  return <NativeText style={[textStyle, { textAlign: align }]} {...props} />
}

export default Text
