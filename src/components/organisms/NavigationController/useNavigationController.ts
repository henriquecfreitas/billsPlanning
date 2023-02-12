import { useContext, useMemo } from "react"

import { LocaleContext } from "@Locale"

import { NavigationContext } from "./context/NavigationContext"

const useNavigationController = () => {
  const {
    currentPage: {
      titleKey,
      pageView,
      headerAction,
      headerContent,
    },
    currentPageLevel,
    popPage,
  } = useContext(NavigationContext)

  const { strings } = useContext(LocaleContext)
  const title = useMemo(() => strings[titleKey], [titleKey, strings])

  return {
    title,
    pageView,
    headerAction,
    headerContent,
    currentPageLevel,
    popPage,
  }
}

export default useNavigationController
