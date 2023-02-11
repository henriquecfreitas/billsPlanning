type StringMap = {
  [k in keyof typeof originStringMap]: string
}

export const originStringMap = { 
  "email": null,
  "password": null,
  "login": null,
  "logout": null,
  "entries": null,
  "home__title": null,
  "home__search_placeholder": null,
  "home__listing_title": null,
}

export default StringMap
