import React, { useContext } from "react"
import { TouchableOpacity } from "react-native"

import { ThemeContext } from "@Theme"

import { Icon } from "@Components/atoms"

type Props = {
  onPress: () => void,
}
const AddAction: React.FC<Props> = ({
  onPress,
}) => {
  const { colors } = useContext(ThemeContext)
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="plus" size={24} color={colors.bg_text_accent} />
    </TouchableOpacity>
  )
}

export default AddAction
