import React, { useContext, useMemo } from "react"
import { View } from "react-native"

import { BillContext } from "@Bill"
import { ThemeContext } from "@Theme"
import { LocaleContext } from "@Locale"

import { Text } from "@Components/atoms"
import { BillsListing } from "@Components/organisms"
import { usePushBillFormPage } from "@Components/templates/BillForm"

import CreateStyles from "./HomePageView.styles"

const HomePageView: React.FC = () => {
  const { billsListing } = useContext(BillContext)
  const { strings: {
    entries,
    home__listing_title,
  } } = useContext(LocaleContext)
  const { colors } = useContext(ThemeContext)

  const { pushBillFormPage } = usePushBillFormPage()

  const styles = useMemo(() => CreateStyles(colors), [colors])

  return (
    <View style={styles.container}>
      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>{home__listing_title}</Text>
        <Text style={styles.listInfo}>{`27 ${entries}`}</Text>
      </View>
      <BillsListing
        bills={billsListing}
        onSelectBill={pushBillFormPage}
      />
    </View>
  )
}

export default HomePageView
