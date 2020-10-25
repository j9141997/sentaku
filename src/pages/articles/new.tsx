import React, { FC, useEffect, useCallback } from 'react'
import Router from 'next/router'
import Layout from '@components/Layout'
import Container from '@components/template/Template'

import { useAuth } from 'src/hooks/useAuth'

const NewPage: FC = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    isNotLogin()
  })

  const isNotLogin = useCallback(() => {
    !currentUser && Router.push('/login')
  }, [currentUser])

  return (
    <Layout>
      <Container></Container>
    </Layout>
  )
}

export default NewPage
