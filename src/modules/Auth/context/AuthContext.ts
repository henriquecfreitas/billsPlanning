import React from "react"

export type AuthContextData = {
  hasSession: boolean
  user?: any
}

type AuthContextDispatch = {
  setSession: () => void
  endSession: () => void
}

type AuthContextValue = AuthContextData & AuthContextDispatch

const AuthContext = React.createContext<AuthContextValue>({
  hasSession: false,
  setSession: () => {},
  endSession: () => {},
})

export { AuthContext }
