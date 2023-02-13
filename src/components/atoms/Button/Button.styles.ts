import { StyleSheet } from "react-native"

import { ColorMap } from "@Theme"

import { ButtonVariant } from "./ButtonVariant"

type Params = {
  variant: ButtonVariant
  themeColors: ColorMap,
  viewHeight: number,
}
export default ({
  variant,
  themeColors,
  viewHeight,
}: Params) => StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 84,
    alignItems: "center",
    borderRadius: 0.5 * viewHeight,
    backgroundColor: (() => {
      switch (variant) {
        case ButtonVariant.Default: return "#0000"
        case ButtonVariant.OverBG: return themeColors.app__foreground
        case ButtonVariant.Primary: return themeColors.primary
        case ButtonVariant.Danger: return themeColors.danger
      }
    })(),
  },
  label: {
    color: (() => {
      switch (variant) {
        case ButtonVariant.Default:
        case ButtonVariant.OverBG: return themeColors.primary
        case ButtonVariant.Primary:
        case ButtonVariant.Danger: return themeColors.app__foreground
      }
    })(),
  },
})
