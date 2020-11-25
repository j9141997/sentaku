import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
  }
}

export const useGlobalState = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  })
}
