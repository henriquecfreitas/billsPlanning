import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { ThemeContext } from "@Theme"

import { Text } from "@Components/atoms"

import NavigationPage from "./NavigationPage"
import CreateStyles from "./NavigationController.styles"

type Props = {
  page: NavigationPage,
}
const NavigationController: React.FC<Props> = ({ page }) => {
  const {
    title,
    pageView,
    headerAction,
    headerContent,
  } = page
  
  const { colors } = useContext(ThemeContext)
  const styles = useMemo(() => CreateStyles(colors), [colors])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
          {headerAction}
        </View>
        <View style={styles.headerContentContainer}>
          {headerContent}
        </View>
      </View>
      <View style={styles.pageView}>
        {pageView}
      </View>
    </View>
  )
}

export default NavigationController
