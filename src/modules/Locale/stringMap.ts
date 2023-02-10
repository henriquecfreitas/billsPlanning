type StringMap = {
  [k in keyof typeof originStringMap]: string
}

export const originStringMap = { 
  "email": null,
  "password": null,
  "login": null,
}

export default StringMap
