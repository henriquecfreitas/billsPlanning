import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { ThemeContext } from "@Theme"
import { last } from "@Utils/array"

import { Icon, Text } from "@Components/atoms"

import NavigationPage from "./NavigationPage"
import CreateStyles from "./NavigationController.styles"

type Props = {
  pageStack: NavigationPage[],
}
const NavigationController: React.FC<Props> = ({ pageStack }) => {
  const {
    title,
    pageView,
    headerAction,
    headerContent,
  } = last(pageStack) || {}
  
  const { colors } = useContext(ThemeContext)
  const styles = useMemo(() => CreateStyles(colors), [colors])

  return pageView && (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          {pageStack.length > 1 && (
            <Icon name="left" size={28} color={colors.bg_text_accent} />
          )}
          <Text style={styles.headerTitle}>{title}</Text>
          {headerAction}
        </View>
        {headerContent && <View style={styles.headerContentContainer}>
          {headerContent}
        </View>}
      </View>
      <View style={styles.pageView}>
        {pageView}
      </View>
    </View>
  )
}

export default NavigationController
