import React, { PropsWithChildren } from "react"

const ListItem: React.FC<PropsWithChildren> = ({children}) => {
  return <>
    {children}
  </>
}

export default ListItem
