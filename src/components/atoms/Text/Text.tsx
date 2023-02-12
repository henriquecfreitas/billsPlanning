import React, { PropsWithChildren, useMemo } from "react"
import { Text as NativeText, StyleProp, TextStyle } from "react-native"

type Props = PropsWithChildren & {
  style?: StyleProp<TextStyle>,
}
const Text: React.FC<Props> = ({
  style,
  ...props
}) => {
  const textStyle = useMemo(() => [style], [style])
  return <NativeText style={textStyle} {...props} />
}

export default Text
