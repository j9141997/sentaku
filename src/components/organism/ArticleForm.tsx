import React, { FC, MouseEvent, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { useTheme, Theme } from 'src/hooks/useTheme'
import { FieldSet, TableFieldSet } from '@components/molecule/FieldSet'
import { Panel } from '@components/molecule/Panel'
import { Input } from '@components/atom/Input'
import { TitleInput } from '@components/atom/TitleInput'
import { PrimaryButton } from '@components/atom/PrimaryButton'
import { SecondaryButton } from '@components/atom/SecondaryButton'
import { Icon } from '@components/atom/Icon'

export type Props = {
  options?: {
    optionName: string
    merits: string[]
    demerits: string[]
  }[]
  onClickAddRow: (event: MouseEvent<HTMLButtonElement>, index?: number) => void
  onClickDeleteRow: (
    event: MouseEvent<HTMLButtonElement>,
    index?: number
  ) => void
  onChangeValue: (event: ChangeEvent<HTMLInputElement>, index?: number) => void
}

export const ArticleForm: FC<Props> = ({
  options = [],
  onClickAddRow,
  onClickDeleteRow,
  onChangeValue,
}) => {
  const theme = useTheme()
  return (
    <Wrapper>
      <FormPanel themes={theme}>
        <TitleInput
          placeholder="Title"
          autoFocus={true}
          onChangeValue={onChangeValue}
        />
        {options.map((object, i) => (
          <StyledPanel
            key={`fieldSet${i + 1}`}
            title={`オプション#${i + 1}`}
            themes={theme}
            onClose={options.length > 1 ? onClickDeleteRow : null}
          >
            <InputGroup themes={theme}>
              <FieldSet
                label="オプション名"
                onChangeValue={(e) => onChangeValue(e, i)}
              />
              <TableFieldSet columns={meritColumns}>
                {(object.merits || ([''] as Array<string>)).map(
                  (merit: string, meritIndex: number) => (
                    <tr key={`merit-${meritIndex}`}>
                      <td>
                        <StyledInput
                          themes={theme}
                          value={merit}
                          onChangeValue={(e) => {
                            onChangeValue(e, meritIndex)
                          }}
                        />
                      </td>
                    </tr>
                  )
                )}
              </TableFieldSet>
              <PrimaryButton
                type="button"
                size="s"
                data-type="merits"
                onClick={(e) => onClickAddRow(e, i)}
              >
                メリットを追加する
                <Icon name="MdAddCircleOutline" />
              </PrimaryButton>
              <TableFieldSet columns={demeritColumns}>
                {(object.demerits || ([''] as Array<string>)).map(
                  (demerit: string, demeritIndex: number) => (
                    <tr key={`demerit-${demeritIndex}`}>
                      <td>
                        <StyledInput
                          themes={theme}
                          value={demerit}
                          onChangeValue={(e) => {
                            onChangeValue(e, demeritIndex)
                          }}
                        />
                      </td>
                    </tr>
                  )
                )}
              </TableFieldSet>
              <PrimaryButton
                type="button"
                size="s"
                data-type="demerits"
                onClick={(e) => onClickAddRow(e, i)}
              >
                デメリットを追加する
                <Icon name="MdAddCircleOutline" />
              </PrimaryButton>
            </InputGroup>
          </StyledPanel>
        ))}
        <ButtonWrapper>
          <PrimaryButton
            type="button"
            size="s"
            data-type="options"
            onClick={onClickAddRow}
          >
            追加する
            <Icon name="MdAddCircleOutline" />
          </PrimaryButton>
        </ButtonWrapper>
      </FormPanel>
      <ButtonWrapper>
        <StyledPrimaryButton
          type="submit"
          onClick={onClickAddRow}
          wide={true}
          themes={theme}
        >
          保存する
        </StyledPrimaryButton>
        <SecondaryButton type="button" wide={true}>
          キャンセル
        </SecondaryButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

const meritColumns = ['メリット']
const demeritColumns = ['デメリット']

const Wrapper = styled.div``
const FormPanel = styled(Panel)<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    margin: 0 0 ${size.pxToRem(size.space.S)} 0;
  `
})
const StyledPanel = styled(Panel)<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    &:not(:last-of-type) {
      margin: 0 0 ${size.pxToRem(size.space.S)} 0;
    }
  `
})

const InputGroup = styled.div<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    margin: ${size.pxToRem(size.space.S)} 0 0;
  `
})

const StyledInput = styled(Input)<{ themes: Theme }>(({ themes }) => {
  const { size } = themes
  return css`
    margin: 0 0 ${size.pxToRem(size.space.XXS)} 0;
  `
})

const ButtonWrapper = styled.div`
  text-align: center;
`

const StyledPrimaryButton = styled(PrimaryButton)<{ themes: Theme }>(
  ({ themes }) => {
    const { size } = themes
    return css`
      margin: 0 0 ${size.pxToRem(size.space.XXS)} 0;
    `
  }
)
