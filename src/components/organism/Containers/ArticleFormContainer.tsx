import React, {
  FC,
  Reducer,
  useReducer,
  ComponentProps,
  useCallback,
} from 'react'
import { ArticleForm as ArticleFormComponent } from '@components/organism/ArticleForm'

type State = {
  options: ComponentProps<typeof ArticleFormComponent>['options']
}
enum ActionType {
  ADD_ROW = 'ADD_ROW',
  OPTIONS_CHANGE_VALUE = 'OPTIONS_CHANGE_VALUE',
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
    case ActionType.OPTIONS_CHANGE_VALUE:
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

  const handleAddRow: ComponentProps<
    typeof ArticleFormComponent
  >['onClickAddRow'] = useCallback(
    (event, index = null) => {
      event.preventDefault()
      const values = Object.assign([], state.options)
      const valueType = event.currentTarget.dataset.type || null
      if (!valueType) {
        return
      } else if (valueType === 'options') {
        values.push(initState.options[0])
      } else {
        values[index][valueType].push('')
      }

      dispatch({
        type: ActionType.ADD_ROW,
        payload: { ...state, options: [...values] },
      })
    },
    [dispatch, state]
  )

  const handleChangeValue: ComponentProps<
    typeof ArticleFormComponent
  >['onChangeValue'] = useCallback(
    (event, index) => {
      const values = Object.assign([], state.options)
      const { name, value } = event.target
      values[index][name] = value

      dispatch({
        type: ActionType.OPTIONS_CHANGE_VALUE,
        payload: { ...state, options: [...values] },
      })
    },
    [dispatch, state]
  )
  return (
    <ArticleFormComponent
      onClickAddRow={handleAddRow}
      onChangeValue={handleChangeValue}
      options={state.options}
    />
  )
}
