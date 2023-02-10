import React from "react"

import { HomePageView } from "@Components/templates"
import LanguageSelector from "@Components/templates/LanguageSelector"

const MainPage: React.FC = () => {
  return <>
    <LanguageSelector />
    <HomePageView />
  </>
}

export { MainPage }
