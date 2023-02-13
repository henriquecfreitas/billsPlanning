import React, { useContext, useMemo } from "react"
import {
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
  Platform
} from "react-native"
import Picker, {
  PickerSelectProps,
  PickerStyle,
} from "react-native-picker-select"

import { ThemeContext } from "@Theme"

import { Gap, Icon } from "@Components/atoms"

import CreateStyles from "./SelectInput.styles"

type Props = PickerSelectProps & {
  style?: StyleProp<ViewStyle>,
  inputStyle?: PickerStyle,
  viewProps?: ViewProps,
}
const SelectInput: React.FC<Props> = ({
  style,
  inputStyle,
  viewProps,
  children,
  ...props
}) => {
  const { colors } = useContext(ThemeContext)

  const styles = useMemo(() => {
    const { viewStyles, pickerStyles } = CreateStyles(colors)
    return {
      input: {...pickerStyles, ...inputStyle},
      inputContainer: [viewStyles.inputContainer, style],
    }
  }, [colors, style])

  return (
    <View style={styles.inputContainer} {...viewProps}>
      {children}
      <Gap.Horizontal value={16} />
      <Picker
        style={styles.input}
        Icon={(() =>
          Platform.OS !== "web" && (
            <Icon name="down" size={24} color={colors.text_light} />
          )
        // casting to ReactNode bc of wrong type definition coming from the lib
        ) as unknown as React.ReactNode}
        {...props}
      />
    </View>
  )
}

export default SelectInput
