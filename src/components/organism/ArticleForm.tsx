import React, { FC, MouseEvent, ChangeEvent } from 'react'
import styled from 'styled-components'
import { FieldSet } from '@components/molecule/FieldSet'
import { Panel } from '@components/molecule/Panel'
import { TitleInput } from '@components/atom/TitleInput'
import { PrimaryButton } from '@components/atom/PrimaryButton'
import { Icon } from '@components/atom/Icon'

export type Props = {
  options?: string[]
  onClickAddRow: (e: MouseEvent<HTMLButtonElement>) => void
  onValueChange: (e: ChangeEvent<HTMLInputElement>, i: number) => void
}

export const ArticleForm: FC<Props> = ({
  options = [],
  onClickAddRow,
  onValueChange,
}) => {
  return (
    <Wrapper>
      <TitleInput placeholder="Title" />
      <Panel>
        {options.map((value, i) => (
          <FieldSet
            key={`fieldSet${i + 1}`}
            label={`オプション#${i + 1}`}
            onValueChange={(e) => onValueChange(e, i)}
          />
        ))}
      </Panel>
      <PrimaryButton size="s" onClick={onClickAddRow}>
        追加する
        <Icon name="MdAddCircleOutline" />
      </PrimaryButton>
      {/* <button type="submit">投稿する</button> */}
    </Wrapper>
  )
}

const Wrapper = styled.div``
