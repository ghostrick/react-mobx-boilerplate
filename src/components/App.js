// @flow
import React from 'react'
import { observer, Provider } from 'mobx-react'
import stores from '../stores'
import Router from './Router'

import './Common.styl'

export default observer(props => {

  return (
    <Provider {...stores}>
      <Router />
    </Provider>
  )
})
