import React, { FC } from 'react'
import Layout from '../components/Layout'
import Container from '@components/template/Template'
import { PanelList } from '@components/organism/PanelList'

const IndexPage: FC = () => {
  return (
    <Layout>
      <Container>
        <PanelList />
      </Container>
    </Layout>
  )
}
export default IndexPage
