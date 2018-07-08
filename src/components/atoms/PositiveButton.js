// @flow
import * as React from 'react'
import styles from './styles/PositiveButton.styl'

type PropsType = {
  onClick: Function,
  text: string
}

export default ({onClick, text}: PropsType) => {
  return (
    <div className={styles.button}>
      <a onClick={() => onClick() }>{text || 'submit'}</a>
    </div>
  )
}
