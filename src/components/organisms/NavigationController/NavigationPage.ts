import { ReactNode } from "react"
import { StringMap } from "@Locale"

type NavigationPage = {
  titleKey: keyof StringMap,
  pageView: ReactNode,
  headerAction?: ReactNode,
  headerContent?: ReactNode,
}

export default NavigationPage
