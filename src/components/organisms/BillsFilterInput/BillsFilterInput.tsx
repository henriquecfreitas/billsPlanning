import React, { useContext } from "react"
import { LocaleContext } from "@Locale"
import { SearchField } from "@Components/molecules"

const BillsFilterInput: React.FC = () => {
  const {
    strings: {
      home__search_placeholder,
    },
  } = useContext(LocaleContext)

  return <SearchField placeholder={home__search_placeholder} />
}

export default BillsFilterInput
