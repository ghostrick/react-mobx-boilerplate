// @flow
import { compose } from 'recompose'
import { observer, inject } from 'mobx-react'

export default compose(
  inject('counter'),
  observer
)
