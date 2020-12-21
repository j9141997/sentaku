import React from 'react'
import { NextPage } from 'next'
import useSWR from 'swr'
import Container from '@components/template/Template'
import { PanelList } from '@components/organism/PanelList'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const IndexPage: NextPage = () => {
  const baseURL = process.env.API_BASE_ENDPOINT
  const { data, error } = useSWR(`${baseURL}/options`, fetcher)

  if (!data) {
    return <div />
  }
  return (
    <Container>
      <PanelList data={data.options || []} />
    </Container>
  )
}
export default IndexPage
