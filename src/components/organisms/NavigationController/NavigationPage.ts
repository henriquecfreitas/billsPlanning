import { ReactNode } from "react"

type NavigationPage = {
  title: string,
  pageView: ReactNode,
  headerAction?: ReactNode,
  headerContent?: ReactNode,
}

export default NavigationPage
