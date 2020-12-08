import React, { useEffect, useCallback } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Container from '@components/template/Template'
import { useAuth } from 'src/hooks/useAuth'
import { ArticleFormContainer } from '@components/organism/Containers/ArticleFormContainer'

const NewPage: NextPage = () => {
  const { currentUser } = useAuth()
  useEffect(() => {
    // isNotLogin()
  })

  const isNotLogin = useCallback(() => {
    !currentUser && Router.push('/login')
  }, [currentUser])

  return (
    <Container>
      <ArticleFormContainer />
    </Container>
  )
}

export default NewPage
