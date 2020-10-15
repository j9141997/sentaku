import { User } from 'firebase'
import React, { FC, createContext, useEffect, useState } from 'react'

import firebase from '../../utils/firebase'

export type AuthContextProps = {
  currentUser: User | null | undefined
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
})

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )
  const { Provider } = AuthContext

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  /* 下階層のコンポーネントをラップする */
  return <Provider value={{ currentUser: currentUser }}>{children}</Provider>
}
