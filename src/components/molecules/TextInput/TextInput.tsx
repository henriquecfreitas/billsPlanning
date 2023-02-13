import React, { useContext, useMemo } from "react"
import {
  TextInput as NativeInput,
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextStyle
} from "react-native"

import { Gap } from "@Components/atoms"

import CreateStyles from "./TextInput.styles"
import { ThemeContext } from "@Theme"

type Props = TextInputProps & {
  style?: StyleProp<ViewStyle>,
  inputStyle?: StyleProp<TextStyle>,
  viewProps?: ViewProps,
}
const TextInput: React.FC<Props> = ({
  style,
  inputStyle,
  viewProps,
  children,
  ...props
}) => {
  const { colors } = useContext(ThemeContext)

  const styles = useMemo(() => {
    const { inputContainer, input } = CreateStyles(colors)
    return {
      input: [input, inputStyle],
      inputContainer: [inputContainer, style],
    }
  }, [colors, style])

  return (
    <View style={styles.inputContainer} {...viewProps}>
      {children}
      <Gap.Horizontal value={16} />
      <NativeInput
        style={styles.input}
        placeholderTextColor={colors.text_light}
        {...props}
      />
    </View>
  )
}

export default TextInput
