import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { CSSTransition } from 'react-transition-group'
import { useALertContext } from '../../context/AlertContext'
import { css } from 'aphrodite'
import styles from './stylesheet'

const AlertMessage = () => {
  const {
    visible,
    hideAlert,
    alert: { value, title },
  } = useALertContext()
  const removeALert = hideAlert

  return (
    <CSSTransition
      classNames="alert"
      in={visible}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <Alert
        onClick={removeALert}
        className={css(styles.alert)}
        variant={value || 'danger'}
        onClose={''}
      >
        <Alert.Heading className={css(styles.heading)}>
          {title || 'Placeholder!'}
        </Alert.Heading>

        <button
          onClick={() => hideAlert()}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </Alert>
    </CSSTransition>
  )
}

export default AlertMessage
