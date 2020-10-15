import { useContext } from 'react'
import { AuthContext, AuthContextProps } from '../auths/AuthProvider'

export type Auth = AuthContextProps

export const useAuth = (): Auth => {
  const auth: Auth = useContext(AuthContext)
  return auth
}
