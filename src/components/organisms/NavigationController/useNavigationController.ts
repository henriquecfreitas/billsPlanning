import { useContext } from "react"
import { NavigationContext } from "./context/NavigationContext"

const useNavigationController = () => {
  const {
    currentPage: {
      title,
      pageView,
      headerAction,
      headerContent,
    },
    currentPageLevel,
    popPage,
  } = useContext(NavigationContext)

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
