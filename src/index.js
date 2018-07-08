// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

if (!global._babelPolyfill) {
  require('babel-polyfill')
}

const root:any = document.querySelector('body > #root')

ReactDOM.render(<App />, root)
