import React, { PropsWithChildren, useMemo } from "react"
import { Text as NativeText, StyleProp, StyleSheet, TextStyle } from "react-native"

import Styles from "./Text.styles"

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
