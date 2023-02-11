import React, { useContext, useMemo } from "react"
import { TouchableOpacity } from "react-native"

import { Bill, BillKind } from "@Bill"
import { ThemeContext } from "@Theme"

import { Icon, Text } from "@Components/atoms"

import CreateStyles from "./BillListItem.styles"

type Props = {
  bill: Bill,
}
const BillListItem: React.FC<Props> = ({ bill }) => {
  const {
    name,
    code,
    kind,
    children,
  } = bill

  const { colors } = useContext(ThemeContext)
  
  const styles = useMemo(() => CreateStyles(colors), [colors])

  const {
    kindStyle,
    iconName,
    iconColor,
  } = useMemo(() =>({
    kindStyle: styles[kind],
    ...(kind === BillKind.Income ? {
      iconName: "arrowright",
      iconColor: colors.green,
    } : {
      iconName: "arrowleft",
      iconColor: colors.orange,
     }),
  }), [kind, colors, styles])

  return <>
    <TouchableOpacity style={styles.container}>
      <Icon name={iconName} size={16} color={iconColor} />
      <Text style={kindStyle}>{`${code} - ${name}`}</Text>
      <Icon name="delete" size={16} style={styles.deleteIcon} color={colors.text_light} />
    </TouchableOpacity>
    {children.map(bill => (
      <BillListItem key={bill.id} bill={bill}/>
    ))}
  </>
}

export default BillListItem
