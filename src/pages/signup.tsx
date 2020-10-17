import React, { FC, useState, useEffect, useCallback } from 'react'
import Router from 'next/router'

import Layout from '@components/Layout'
import AuthContainer from '@components/template/AuthTemplate'
import Title from '@components/atom/Title'
import { GoogleAuthButton } from '@components/atom/GoogleAuthButton'
import { useAuth } from '../hooks/useAuth'
import firebase from '../../utils/firebase'

// const useDidMount = (func: () => void) =>
//   useEffect(() => {
//     func()
//   }, [])

type Params = {
  email: string
  password: string
}

const SignUpPage: FC = () => {
  const [params, setParams] = useState<Params>({ email: '', password: '' })
  const { currentUser } = useAuth()
  console.log(currentUser)

  useEffect(() => {
    isSignedIn()
  })

  const isSignedIn = useCallback(() => {
    currentUser && Router.push('/')
  }, [currentUser])

  const signInByGoogleAuth = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(params.email, params.password)
      Router.push('/')
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <Layout>
      <AuthContainer>
        <Title>Find Your Piece Of Life Option</Title>
        <GoogleAuthButton onClick={signInByGoogleAuth}>
          Googleで登録する
        </GoogleAuthButton>
      </AuthContainer>
    </Layout>
  )
}

export default SignUpPage
