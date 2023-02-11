import React from "react"

import { Theme } from "../themes"
import ColorMap, { originColorMap } from "../colorMap"

export type ThemeContextData = {
  current: Theme,
  colors: ColorMap,
}

type ThemeContextDispatch = {
  setTheme: (theme: Theme) => void
}

type ThemeContextValue = ThemeContextData & ThemeContextDispatch

const ThemeContext = React.createContext<ThemeContextValue>({
  current: null as Theme,
  colors: originColorMap,
  setTheme: (_: Theme) => {},
})

export { ThemeContext }
