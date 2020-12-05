import React, { FC } from 'react'
import { ArticleForm as ArticleFormComponent } from '@components/organism/ArticleForm'

type State = {
  options: {
    optionName: string
    merits: string[]
    demerits: string[]
  }[]
}

export const ArticleFormContainer: FC = () => {
  return <ArticleFormComponent />
}
