import React, { useContext, useMemo } from "react"

import { Icon, TextInput } from "@Components/atoms"
import { ThemeContext } from "@Theme"

import CreateStyles from "./SearchField.styles"

type Props = {
  placeholder: string,
}
const SearchField: React.FC<Props> = ({ placeholder }) => {
  const { colors } = useContext(ThemeContext)
  const styles = useMemo(() => CreateStyles(colors), [colors])

  return (
    <TextInput style={styles.inputContainer} placeholder={placeholder}>
      <Icon name="search1" size={16} color={colors.text_light}/>
    </TextInput>
  )
}

export default SearchField
