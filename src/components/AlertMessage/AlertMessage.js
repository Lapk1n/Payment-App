import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { CSSTransition } from 'react-transition-group'
import { useProvider } from '../../context/AlertContext'
import { styles } from './Styles'

export default function AlertMessage() {
  const { visible, hideAlert } = useProvider()
  const type = useProvider().alert.value
  const message = useProvider().alert.title

  return (
    <CSSTransition
      classNames="alert"
      in={visible}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <Alert
        onClick={() => hideAlert()}
        style={styles.alert}
        variant={type || 'danger'}
        onClose={''}
      >
        <Alert.Heading style={styles.heading}>
          {message || 'Placeholder!'}
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
