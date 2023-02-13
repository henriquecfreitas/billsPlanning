import React, { useContext, useEffect, useState } from "react"

import { BillContext } from "@Bill"
import { LocaleContext } from "@Locale"

import { SearchField } from "@Components/organisms"

const BOUNCE_DELAY = 500 // 500ms

const BillsFilterInput: React.FC = () => {
  const { filterBills } = useContext(BillContext)
  const {
    strings: {
      home__search_placeholder,
    },
  } = useContext(LocaleContext)

  const [value, setValue] = useState("")

  useEffect(() => {
    const filterTimeout = setTimeout(() => {
      filterBills(value)
    }, BOUNCE_DELAY)

    return () => {
      clearTimeout(filterTimeout)
    }
  }, [value])

  return <SearchField
    placeholder={home__search_placeholder}
    value={value}
    onChangeText={setValue}
  />
}

export default BillsFilterInput
