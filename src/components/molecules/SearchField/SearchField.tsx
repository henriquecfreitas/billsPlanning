import React, { useContext } from "react"

import { Icon, TextInput } from "@Components/atoms"
import { ThemeContext } from "@Theme"

type Props = {
  placeholder: string,
}
const SearchField: React.FC<Props> = ({ placeholder }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <TextInput placeholder={placeholder}>
      <Icon name="search1" size={16} color={colors.text}/>
    </TextInput>
  )
}

export default SearchField
