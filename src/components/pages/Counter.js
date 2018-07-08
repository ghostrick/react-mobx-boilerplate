// @flow
import React from 'react'
import mobxEnhancer from '../../enhancers/mobxEnhancer'
import NegativeButton from '../atoms/NegativeButton'
import PositiveButton from '../atoms/PositiveButton'

import styles from './styles/Counter.styl'

export default mobxEnhancer(({counter}) => {

  const { count, inc, dec } = counter

  return (
    <div className={styles.container}>
      <p>Count: {count}</p>
      <div className={styles.actions}>
        <PositiveButton onClick={inc} text='inc++' />
        <NegativeButton onClick={dec} text='dec--' />
      </div>
    </div>
  )
})
