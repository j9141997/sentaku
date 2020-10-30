import React, { FC } from 'react'

export const ArticleForm: FC = () => {
  return (
    <div>
      <input type="text" name="title" />
      <button type="submit">投稿する</button>
    </div>
  )
}
