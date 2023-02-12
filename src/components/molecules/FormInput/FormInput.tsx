import React, { useContext, useMemo } from "react"
import { TextInputProps, View } from "react-native"

import { ThemeContext } from "@Theme"

import { Text, TextInput } from "@Components/atoms"

import CreateStyles from "./FormInput.styles"
import { FormFieldProps } from "./FormField.props"

export type FormInputProps = FormFieldProps & TextInputProps
const Input: React.FC<FormInputProps> = ({
  title,
  placeholder,
  ...props
}) => {
  const { colors } = useContext(ThemeContext)
  const styles = useMemo(() => CreateStyles(colors), [colors])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.inputContainer}
        inputStyle={styles.input}
        placeholder={placeholder}
        {...props}
      />
    </View>
  )
}

export default Input
