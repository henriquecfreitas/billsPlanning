import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { ThemeContext } from "@Theme"

import { Text, TextInput } from "@Components/atoms"

import CreateStyles from "./FormInput.styles"
import { FormInputProps } from "./FormInput.props"

const Input: React.FC<FormInputProps> = ({
  title,
  placeholder,
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
      />
    </View>
  )
}

export default Input
