import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { Bill } from "@Bill"
import { ThemeContext } from "@Theme"
import { LocaleContext } from "@Locale"

import { Text } from "@Components/atoms"
import { BillsListing } from "@Components/organisms"
import { NavigationContext, NavigationPage } from "@Components/organisms/NavigationController"

import CreateStyles from "./HomePageView.styles"

type Props = {
  bills: Bill[],
  pushBillForm: (bill: Bill) => NavigationPage,
}
const HomePageView: React.FC<Props> = ({
  bills,
  pushBillForm,
}) => {
  const { strings: {
    entries,
    home__listing_title,
  } } = useContext(LocaleContext)
  const { colors } = useContext(ThemeContext)
  const { pushPage } = useContext(NavigationContext)

  const styles = useMemo(() => CreateStyles(colors), [colors])

  return (
    <View style={styles.container}>
      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>{home__listing_title}</Text>
        <Text style={styles.listInfo}>{`27 ${entries}`}</Text>
      </View>
      <BillsListing
        bills={bills}
        onSelectBill={bill => {
          const billFormView = pushBillForm(bill)
          pushPage(billFormView)
        }}
      />
    </View>
  )
}

export default HomePageView
