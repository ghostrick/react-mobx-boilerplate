// @flow
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Counter from './pages/Counter'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/count" exact component={Counter} />
      </Switch>
    </BrowserRouter>
  )
}
