type ColorMap = {
  [k in keyof typeof originColorMap]: string
}

export const originColorMap = {
  "primary": null,
  "success": null,
  "warning": null,
  "danger": null,
  "text_dark": null,
  "text": null,
  "text_accent": null,
  "text_alternative": null,
  "text_light": null,
  "bg_text_accent": null,
  "white": null,
  "green": null,
  "orange": null,
  "dark_gray": null,
  "app__background": null,
  "app__foreground": null,
}

export default ColorMap
