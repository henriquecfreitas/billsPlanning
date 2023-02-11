import React, { useContext, useMemo } from "react"
import {
  TextInput as NativeInput,
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextInputProps
} from "react-native"

import CreateStyles from "./TextInput.styles"
import { ThemeContext } from "@Theme"

type Props = TextInputProps & {
  style?: StyleProp<ViewStyle>,
  viewProps?: ViewProps,
}
const TextInput: React.FC<Props> = ({
  style,
  viewProps,
  children,
  ...props
}) => {
  const { colors } = useContext(ThemeContext)

  const styles = useMemo(() => {
    const { inputContainer, input } = CreateStyles(colors)
    return {
      input,
      inputContainer: [inputContainer, style],
    }
  }, [colors, style])

  return (
    <View style={styles.inputContainer} {...viewProps}>
      {children}
      <NativeInput
        style={styles.input}
        placeholderTextColor={colors.text_alternative}
        {...props}
      />
    </View>
  )
}

export default TextInput
