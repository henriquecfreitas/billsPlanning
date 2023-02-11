import React, { useContext } from "react"
import { View } from "react-native"

import { LocaleContext } from "@Locale"
import { BillContext } from "@Bill"

import { Text } from "@Components/atoms"
import { BillsListing } from "@Components/organisms"

const HomePageView: React.FC = () => {
  const { strings: {
    entries,
    home__listing_title,
  } } = useContext(LocaleContext)

  const { billsListing } = useContext(BillContext)

  return (
    <View>
      <Text>{home__listing_title}</Text>
      <Text>{`27 ${entries}`}</Text>
      <BillsListing bills={billsListing} />
    </View>
  )
}

export default HomePageView
