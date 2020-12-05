import React, { FC, Reducer, useReducer } from 'react'
import { ArticleForm as ArticleFormComponent } from '@components/organism/ArticleForm'

type State = {
  options: {
    optionName: string
    merits: string[]
    demerits: string[]
  }[]
}
enum ActionType {
  ADD_ROW = 'ADD_ROW',
  OPTIONS_VALUE_CHANGE = 'OPTIONS_VALUE_CHANGE',
}

type Action = {
  type: ActionType
  payload: State
}

const reducer: Reducer<State, Action> = (state, action) => {
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

const initState = {
  options: [
    {
      optionName: '',
      merits: [''],
      demerits: [''],
    },
  ],
}

export const ArticleFormContainer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  return <ArticleFormComponent />
}
