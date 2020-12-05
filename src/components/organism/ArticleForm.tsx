import React, { FC, MouseEvent, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from 'src/hooks/useTheme'
import { FieldSet } from '@components/molecule/FieldSet'
import { TableFieldSet } from '@components/molecule/TableFieldSet'
import { Panel } from '@components/molecule/Panel'
import { Input } from '@components/atom/Input'
import { TitleInput } from '@components/atom/TitleInput'
import { PrimaryButton } from '@components/atom/PrimaryButton'
import { Icon } from '@components/atom/Icon'

export type Props = {
  options?: { optionName: string; merits: []; demetits: [] }[]
  onClickAddRow: (e: MouseEvent<HTMLButtonElement>) => void
  onValueChange: (e: ChangeEvent<HTMLInputElement>, i: number) => void
}

export const ArticleForm: FC<Props> = ({
  options = [],
  onClickAddRow,
  onValueChange,
}) => {
  const theme = useTheme()
  return (
    <Wrapper>
      <TitleInput placeholder="Title" autoFocus={true} />
      {options.map((object, i) => (
        <StyledPanel
          key={`fieldSet${i + 1}`}
          title={`オプション#${i + 1}`}
          themes={theme}
        >
          <FieldSet
            label="オプション名"
            onValueChange={(e) => onValueChange(e, i)}
          />
          <TableFieldSet columns={columns}>
            {(object.merits || ([''] as Array<string>)).map(
              (merit: string, i: number) => (
                <td key={`merit-${i}`}>
                  <Input />
                </td>
              )
            )}
          </TableFieldSet>
          <PrimaryButton size="s" onClick={onClickAddRow}>
            メリットを追加する
            <Icon name="MdAddCircleOutline" />
          </PrimaryButton>
        </StyledPanel>
      ))}
      <PrimaryButton size="s" onClick={onClickAddRow}>
        追加する
        <Icon name="MdAddCircleOutline" />
      </PrimaryButton>
    </Wrapper>
  )
}

const columns = ['メリット']

const Wrapper = styled.div``
const StyledPanel = styled(Panel)<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    &:not(:last-of-type) {
      margin: 0 0 ${size.pxToRem(size.space.S)} 0;
    }
  `
})
