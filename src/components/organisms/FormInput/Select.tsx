import React, { useContext, useMemo } from "react"
import { View } from "react-native"
import { Item, PickerSelectProps } from "react-native-picker-select"

import { ThemeContext } from "@Theme"

import { Text } from "@Components/atoms"
import { SelectInput } from "@Components/molecules"

import CreateStyles from "./FormInput.styles"
import { FormFieldProps } from "./FormField.props"

export type SelectItem<I, V> = Item & {
  origin: I,
  value: V,
}

type Props<I, V> =
  Omit<PickerSelectProps, "onValueChange"> &
  Omit<FormFieldProps, "placeholder"> &
  {
    items: SelectItem<I, V>[],
    onValueChange: (value: V, index: number, origin: I) => void,
  }

const Select: <I, V>(props: Props<I, V>) => React.ReactElement = ({
  title,
  items,
  onValueChange,
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
        onValueChange={(value, i) => {
          const { origin } = items[i]
          onValueChange(value, i, origin)
        }}
        {...props}
      />
    </View>
  )
}

export default Select
