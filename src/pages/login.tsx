import React, { useEffect, useCallback } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../components/Layout'
import AuthContainer from '@components/template/AuthTemplate'

import { GoogleAuthButton } from '@components/atom/GoogleAuthButton'
import { useAuth } from 'src/hooks/useAuth'
import firebase from '../../utils/firebase'
const LoginPage: NextPage = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    isSignedIn()
  })

  const isSignedIn = useCallback(() => {
    currentUser && Router.push('/')
  }, [currentUser])

  const loginByGoogleAuth = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }
  return (
    <Layout>
      <AuthContainer>
        <GoogleAuthButton onClick={loginByGoogleAuth}>
          Googleでログインする
        </GoogleAuthButton>
      </AuthContainer>
    </Layout>
  )
}

export default LoginPage
