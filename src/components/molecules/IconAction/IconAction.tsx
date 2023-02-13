import React, { useContext } from "react"
import { TouchableOpacity } from "react-native"

import { ThemeContext } from "@Theme"

import { Icon } from "@Components/atoms"

type Props = {
  icon: string,
  onPress: () => void,
}
const IconAction: React.FC<Props> = ({
  icon,
  onPress,
}) => {
  const { colors } = useContext(ThemeContext)
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} size={24} color={colors.bg_text_accent} />
    </TouchableOpacity>
  )
}

export default IconAction
