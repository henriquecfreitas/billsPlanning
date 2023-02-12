import React, { useContext, useMemo } from "react"
import { TouchableOpacity } from "react-native"

import { Bill, BillKind } from "@Bill"
import { ThemeContext } from "@Theme"

import { Icon, Text } from "@Components/atoms"
import { ModalViewContext } from "@Components/organisms/ModalView"
import { DeleteBillView } from "@Components/templates"

import CreateStyles from "./BillListItem.styles"

type Props = {
  bill: Bill,
  onSelect?: (bill: Bill) => void,
}
const BillListItem: React.FC<Props> = ({
  bill,
  onSelect,
}) => {
  const {
    name,
    code,
    kind,
    children,
  } = bill

  const { colors } = useContext(ThemeContext)
  const { openView } = useContext(ModalViewContext)
  
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
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onSelect && onSelect(bill)
      }}
    >
      <Icon name={iconName} size={16} color={iconColor} />
      <Text style={[kindStyle, styles.descriptionLabel]}>{`${code} - ${name}`}</Text>
      <TouchableOpacity onPress={() => openView(<DeleteBillView bill={bill} />)}>
        <Icon
          name="delete"
          size={16}
          style={styles.deleteIcon}
          color={colors.text_light}
        />
      </TouchableOpacity>
    </TouchableOpacity>
    {children && children.map(bill => (
      <BillListItem key={bill.id} bill={bill} onSelect={onSelect}/>
    ))}
  </>
}

export default BillListItem
