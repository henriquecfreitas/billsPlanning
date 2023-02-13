import React, { useContext, useMemo } from "react"

import { Icon } from "@Components/atoms"
import { TextInput } from "@Components/molecules"
import { ThemeContext } from "@Theme"

import CreateStyles from "./SearchField.styles"
import { TextInputProps } from "react-native"

type Props = TextInputProps & {}
const SearchField: React.FC<Props> = ({ placeholder, ...props }) => {
  const { colors } = useContext(ThemeContext)
  const styles = useMemo(() => CreateStyles(colors), [colors])

  return (
    <TextInput
      style={styles.inputContainer}
      placeholder={placeholder}
      {...props}
    >
      <Icon name="search1" size={16} color={colors.text_light}/>
    </TextInput>
  )
}

export default SearchField
