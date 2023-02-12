import React, { PropsWithChildren, useContext, useMemo } from "react"
import { TouchableOpacity, View } from "react-native"

import { ThemeContext } from "@Theme"

import { Icon, Text } from "@Components/atoms"

import { NavigationContextProvider } from "./context/NavigationContextProvider"

import NavigationPage from "./NavigationPage"
import CreateStyles from "./NavigationController.styles"
import useNavigationController from "./useNavigationController"

type Props = {
  rootPage: NavigationPage,
}
const NavigationController: React.FC<PropsWithChildren> = () => {
  const { colors } = useContext(ThemeContext)
  const styles = useMemo(() => CreateStyles(colors), [colors])

  const {
    title,
    pageView,
    headerAction,
    headerContent,
    currentPageLevel,
    popPage,
  } = useNavigationController()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          {currentPageLevel > 0 && (
            <TouchableOpacity onPress={popPage}>
              <Icon name="left" size={28} color={colors.bg_text_accent} />
            </TouchableOpacity>
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

export default (props: Props) => {
  const { rootPage, ..._props } = props
  return (
    <NavigationContextProvider rootPage={rootPage}>
      { React.createElement(NavigationController, _props) }
    </NavigationContextProvider>
  )
}
