import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { ThemeContext } from "@Theme"

import { SelectInput, Text } from "@Components/atoms"

import CreateStyles from "./FormInput.styles"
import { FormInputProps } from "./FormInput.props"
import { Item } from "react-native-picker-select"

type SelectItem<I, V> = Item & {
  origin: I,
  value: V,
}

type Props<I, V> = Omit<FormInputProps, "placeholder"> & {
  items: SelectItem<I, V>[],
}
const Select: <I, V>(props: Props<I, V>) => React.ReactElement = ({
  title,
  items,
}) => {
  const { colors } = useContext(ThemeContext)
  const styles = useMemo(() => CreateStyles(colors), [colors])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <SelectInput
        style={styles.inputContainer}
        inputStyle={{
          inputAndroid: styles.input,
          inputIOS: styles.input,
        }}
        placeholder={{}}
        onValueChange={() => {}}
        items={items}
      />
    </View>
  )
}

export default Select
