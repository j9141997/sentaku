import React, {
  useEffect,
  useCallback,
  useReducer,
  Reducer,
  ComponentProps,
} from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Container from '@components/template/Template'
import { useAuth } from 'src/hooks/useAuth'
import { ArticleForm } from '@components/organism/ArticleForm'

type State = {
  options: string[]
}

type Action = {
  type: any
  payload: State
}

enum ActionType {
  ADD_ROW = 'ADD_ROW',
  OPTIONS_VALUE_CHANGE = 'OPTIONS_VALUE_CHANGE',
}

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_ROW:
      return {
        ...state,
        options: action.payload.options,
      }
    case ActionType.OPTIONS_VALUE_CHANGE:
      return {
        ...state,
        options: action.payload.options,
      }
  }
}

const initState = { options: [''] }
const NewPage: NextPage = () => {
  const { currentUser } = useAuth()
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    // isNotLogin()
  })

  const isNotLogin = useCallback(() => {
    !currentUser && Router.push('/login')
  }, [currentUser])

  const handleAddRow: ComponentProps<
    typeof ArticleForm
  >['onClickAddRow'] = useCallback(
    (e) => {
      e.stopPropagation()
      const newOption = 'new value'
      dispatch({
        type: ActionType.ADD_ROW,
        payload: { ...state, options: [...state.options, newOption] },
      })
    },
    [dispatch, state]
  )

  const handleValueChange: ComponentProps<
    typeof ArticleForm
  >['onValueChange'] = useCallback(
    (e, i) => {
      const values = state.options.slice()
      values[i] = e.target.value
      dispatch({
        type: ActionType.OPTIONS_VALUE_CHANGE,
        payload: { ...state, options: [...values] },
      })
    },
    [dispatch, state]
  )

  return (
    <Container>
      <ArticleForm
        onClickAddRow={handleAddRow}
        onValueChange={handleValueChange}
        options={state.options}
      />
    </Container>
  )
}

export default NewPage
