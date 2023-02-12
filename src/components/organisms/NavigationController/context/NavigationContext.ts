import React from "react"

import NavigationPage from "../NavigationPage"

export type NavigationContextData = {
  currentPage: NavigationPage
  currentPageLevel: number
}

type NavigationContextDispatch = {
  pushPage: (page: NavigationPage) => void
  popPage: () => void
}

type NavigationContextValue = NavigationContextData & NavigationContextDispatch

const NavigationContext = React.createContext<NavigationContextValue>({
  currentPage: null,
  currentPageLevel: -1,
  pushPage: (_: NavigationPage) => {},
  popPage: () => {},
})

export { NavigationContext }
