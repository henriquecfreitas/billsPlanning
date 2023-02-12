import React, { useState } from "react"

import { last } from "@Utils/array"

import { NavigationContext } from "./NavigationContext"
import NavigationPage from "../NavigationPage"

type NavigationContextProviderProps = React.PropsWithChildren & {
  rootPage: NavigationPage,
}
const NavigationContextProvider: React.FC<NavigationContextProviderProps> = ({
  rootPage,
  ...props
}) => {
  const [pageStack, setPageStack] = useState([rootPage])

  const pushPage = (page: NavigationPage) => {
    const newPageStack = [
      ...pageStack,
      page,
    ]
    setPageStack(newPageStack)
  }

  const popPage = () => {
    const newPageStack = [
      ...pageStack.slice(0, -1),
    ]
    setPageStack(newPageStack)
  }

  const navigationContext = {
    currentPage: last(pageStack),
    currentPageLevel: pageStack.length - 1,
    pushPage,
    popPage,
  }

  return <NavigationContext.Provider value={navigationContext} {...props} />
}

export { NavigationContextProvider }
