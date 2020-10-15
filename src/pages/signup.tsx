import React, { FC } from 'react'

import Layout from '@components/Layout'
import AuthContainer from '@components/template/AuthTemplate'
import Title from '@components/atom/Title'
import { GoogleAuthButton } from '@components/atom/GoogleAuthButton'

const SignUpPage: FC = () => {
  return (
    <Layout>
      <AuthContainer>
        <Title>Find Your Piece Of Life Option</Title>
        <GoogleAuthButton>Googleで登録する</GoogleAuthButton>
      </AuthContainer>
    </Layout>
  )
}

export default SignUpPage
