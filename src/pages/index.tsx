import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Container from '@components/template/Template'
import { PanelList } from '@components/organism/PanelList'

const IndexPage: NextPage = () => {
  return (
    <Container>
      <PanelList />
    </Container>
  )
}
export default IndexPage
