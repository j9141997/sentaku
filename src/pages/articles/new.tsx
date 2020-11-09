import React, {
  useEffect,
  useCallback,
  MouseEvent,
  useReducer,
  Reducer,
} from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '@components/Layout'
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

const initState = { options: [] }

enum ActionType {
  ADD_ROW = 'ADD_ROW',
}

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_ROW:
      return {
        ...state,
        options: action.payload.options,
      }
  }
}

const NewPage: NextPage = () => {
  const { currentUser } = useAuth()
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    // isNotLogin()
  })

  const isNotLogin = useCallback(() => {
    !currentUser && Router.push('/login')
  }, [currentUser])

  const handleAddRow = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      const newState = Object.assign({}, state)
      const newOption = 'new value'
      dispatch({
        type: 'ARR_ROW',
        payload: { ...newState, options: [...state.options, newOption] },
      })
    },
    [dispatch, state]
  )

  return (
    <Layout>
      <Container>
        <ArticleForm onClickAddRow={handleAddRow} />
      </Container>
    </Layout>
  )
}

export default NewPage
