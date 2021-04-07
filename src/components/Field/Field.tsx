import React from 'react'
import { Form } from 'react-bootstrap'
import { IMaskInput } from 'react-imask'
import { css } from 'aphrodite'
import styles from './stylesheet'
import { IField } from '../../interfaces'

export const Field: React.FC<IField> = (props) => {
  const { labelName, formId, mask, inputName, formikProps } = props

  return (
    <Form.Group className={css(styles.formGroup)} controlId={formId}>
      <label htmlFor={inputName}>{labelName}</label>
      <IMaskInput
        className={css(styles.inputNumber)}
        mask={mask}
        radix="."
        name={inputName}
        id={inputName}
        unmask={false}
        {...formikProps.getFieldProps(inputName)}
      />
      <div className={css(styles.formFeedback)}>
        {formikProps.errors[inputName] && formikProps.touched[inputName]
          ? formikProps.errors[inputName]
          : null}
      </div>
    </Form.Group>
  )
}
