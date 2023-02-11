type ColorMap = {
  [k in keyof typeof originColorMap]: string
}

export const originColorMap = {
  "primary": null,
  "text": null,
  "text_alternative": null,
  "text_accent": null,
  "text_dark": null,
  "bg_text_accent": null,
  "white": null,
  "dark_gray": null,
  "app__background": null,
  "app__foreground": null,
}

export default ColorMap
