import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useALertContext } from '../../context/AlertContext'
import Loader from '../../components/Loader/Loader'
import { useValidation } from '../../services/validation'
import { css } from 'aphrodite'
import styles from './stylesheet'
import { Field } from '../../components/Field/Field'

export default function Payment(props) {
  const { loading } = useALertContext()
  const name = props.location.name
  const formik = useValidation()
  return (
    <Container fluid="lg">
      <Form className={css(styles.form)} onSubmit={formik.handleSubmit}>
        <Field
          labelName="Номер телефона"
          formId="formNumber"
          mask={'+{7}(000)000-00-00'}
          inputName="number"
          formikProps={formik}
        />
        <Field
          labelName="Сумма платежа"
          formId="formAmount"
          mask={'0000'}
          inputName="amount"
          formikProps={formik}
        />
        <Form.Group className={css(styles.formGroup)}>
          <label htmlFor="operator">Мобильный оператор</label>
          <select
            className={css(styles.inputSelect)}
            id="operator"
            defaultValue={name}
          >
            <option value="MTS">MTS</option>
            <option value="BEELINE">BEELINE</option>
            <option value="MEGAFON">MEGAFON</option>
          </select>
        </Form.Group>
        <Form.Group className={css(styles.formGroupBtn)}>
          <Button
            className={css(styles.button)}
            size="sm"
            variant="primary"
            type="submit"
          >
            {loading ? <Loader /> : 'ОПЛАТИТЬ'}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}
