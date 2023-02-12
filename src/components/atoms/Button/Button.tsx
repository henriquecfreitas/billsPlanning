import React, { useContext, useMemo, useState } from "react"
import { Text, TouchableOpacity, View, ViewProps } from "react-native"

import { ThemeContext } from "@Theme"

import CreateStyles from "./Button.styles"

export enum ButtonVariant {
  Default,
  Primary,
  Danger,
}

export type ButtonProps = {
  label: string,
  color?: string,
  backgroundColor?: string,
  variant?: ButtonVariant,
  onPress: () => void,
} & ViewProps

const Input: React.FC<ButtonProps> = ({
  label,
  color,
  backgroundColor,
  variant = ButtonVariant.Default,
  style,
  onPress,
  ...props
}) => {
  const { colors } = useContext(ThemeContext)
  const [viewHeight, setViewHeight] = useState(0)

  const styles = useMemo(() => CreateStyles({
    variant,
    viewHeight,
    themeColors: colors,
  }), [colors, viewHeight])

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.container, style]}
        onLayout={({ nativeEvent }) => {
          const { height } = nativeEvent.layout
          setViewHeight(height)
        }}
        {...props}
      >
        <Text
          style={[styles.label, {
            color,
            backgroundColor,
          }]}
        >{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Input
