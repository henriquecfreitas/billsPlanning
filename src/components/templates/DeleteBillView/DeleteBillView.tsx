import React, { useContext } from "react"
import { View } from "react-native"


import { Bill, BillContext } from "@Bill"
import { ThemeContext } from "@Theme"

import { Button, Gap, Icon, Text } from "@Components/atoms"
import { ModalViewContext } from "@Components/organisms/ModalView"

import { normalizeFontSize } from "@Utils/responsive"

import Styles from "./DeleteBillView.styles"

type Props = {
  bill: Bill,
}

const DeleteBillView: React.FC<Props> = ({
  bill
}) => {
  const { deleteBill } = useContext(BillContext)
  const { closeModal } = useContext(ModalViewContext)
  const { colors } = useContext(ThemeContext)

  return (
    <View style={Styles.container}>
      <Icon
        name="delete"
        color={colors.danger}
        size={normalizeFontSize(44)}
      />
      <View style={Styles.textContent}>
        <Text align="center">Deseja excluir a conta</Text>
        <Gap.Vertical value={4} />
        <View style={Styles.row} >
          <Text align="center" style={{ fontWeight: "700" }}>
            {`${bill.code} - ${bill.name}`}
          </Text>
          <Text align="center">?</Text>
        </View>
        {bill.children?.length > 0 && <>
          <Gap.Vertical value={4} />
          <Text align="center" style={Styles.cascadeDeleteInfo}>
            (Registros descendentes também serão excluídos)
          </Text>
        </>}
      </View>
      <View style={Styles.row} >
        <Button
          label="Não!"
          color={colors.danger}
          onPress={closeModal}
        />
        <Button.Danger
          label="Com certeza"
          onPress={() => {
            deleteBill(bill.id)
            closeModal()
          }}
        />
      </View>
    </View>
  )
}

export default DeleteBillView
