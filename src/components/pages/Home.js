// @flo
import React from 'react'
import { Link, type ContextRouter } from 'react-router-dom'
import Ionicon from 'react-ionicons'

import styles from './styles/Home.styl'

type PropsType = {
  ...ContextRouter
}

export default (props: PropsType) => {
  return (
    <div className={styles.container}>
      <h1>Hello, World</h1>
      <Link to='/count' className={styles.link}>
        <span>Go to counter</span>
        <Ionicon
          icon='ios-arrow-forward'
        />
      </Link>
    </div>
  )
}
