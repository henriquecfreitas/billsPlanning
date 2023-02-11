import lightTheme from "./themes/light"

export const defaultTheme: Theme = "light"

export type Theme = keyof typeof themes

export const themes = {
  "light": lightTheme,
}
