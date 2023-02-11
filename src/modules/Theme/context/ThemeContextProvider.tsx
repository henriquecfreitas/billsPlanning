import React, { useState } from "react"

import { ThemeContext, ThemeContextData } from "./ThemeContext"
import { themes, defaultTheme, Theme } from "../themes"

const defaultData: ThemeContextData = {
  current: "light",
  colors: themes[defaultTheme],
}

const ThemeContextProvider: React.FC<React.PropsWithChildren> = props => {
  const [contextData, setContextData] = useState(defaultData)

  const setTheme = (theme: Theme) => {
    const colors = themes[theme]
    setContextData({
      current: theme,
      colors,
    })
  }

  const themeContext = {
    ...contextData,
    setTheme,
  }

  return <ThemeContext.Provider value={themeContext} {...props} />
}

export { ThemeContextProvider }
