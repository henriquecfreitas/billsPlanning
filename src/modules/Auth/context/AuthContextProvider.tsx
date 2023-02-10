import React, { useState } from "react"
import { AuthContext, AuthContextData } from "./AuthContext"

const defaultData: AuthContextData = {
  hasSession: false,
}

const AuthContextProvider: React.FC<React.PropsWithChildren> = props => {
  const [contextData, setContextData] = useState(defaultData)

  const setSession = () => {
    setContextData({
      ...contextData,
      hasSession: true,
    })
  }

  const endSession = () => {
    setContextData({
      user: undefined,
      hasSession: false,
    })
  }

  const authContext = {
    ...contextData,
    setSession,
    endSession,
  }

  return <AuthContext.Provider value={authContext} {...props} />
}

export { AuthContextProvider }
