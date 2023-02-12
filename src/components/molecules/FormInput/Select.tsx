import React, { useContext, useMemo } from "react"
import { View } from "react-native"
import { Item, PickerSelectProps } from "react-native-picker-select"

import { ThemeContext } from "@Theme"

import { SelectInput, Text } from "@Components/atoms"

import CreateStyles from "./FormInput.styles"
import { FormFieldProps } from "./FormField.props"

type SelectItem<I, V> = Item & {
  origin: I,
  value: V,
}

type Props<I, V> =
  PickerSelectProps &
  Omit<FormFieldProps, "placeholder"> &
  {
    items: SelectItem<I, V>[],
  }

const Select: <I, V>(props: Props<I, V>) => React.ReactElement = ({
  title,
  items,
  ...props
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
        items={items}
        {...props}
      />
    </View>
  )
}

export default Select
