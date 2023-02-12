type StringMap = {
  [k in keyof typeof originStringMap]: string
}

export const originStringMap = { 
  "email": null,
  "password": null,
  "login": null,
  "logout": null,
  "entries": null,
  "income": null,
  "expense": null,
  "yes": null,
  "no": null,
  "home__title": null,
  "home__search_placeholder": null,
  "home__listing_title": null,
  "bill_detail__title": null,
  "bill_form__parent": null,
  "bill_form__code": null,
  "bill_form__name": null,
  "bill_form__kind": null,
  "bill_form__active": null,
  "bill_form__contingency_fund": null,
}

export default StringMap
