import React, { FC } from 'react'
import Layout from '../components/Layout'
import AuthContainer from '@components/template/AuthContainer'

import { GoogleAuthButton } from '@components/atom/GoogleAuthButton'
const LoginPage: FC = () => {
  return (
    <Layout>
      <AuthContainer>
        <GoogleAuthButton>Googleでログインする</GoogleAuthButton>
      </AuthContainer>
    </Layout>
  )
}

export default LoginPage
