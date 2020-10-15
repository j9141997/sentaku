import React from 'react'

import SignUpPresenter from '@components/presenter/SignUpPresenter'

type Props = {}
type State = {
  loading: boolean
}

class SignUpContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { loading: true }
  }

  render(): JSX.Element {
    const { loading } = this.state
    return loading ? null : <SignUpPresenter {...this.props} />
  }
}

export default SignUpContainer
