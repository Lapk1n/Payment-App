import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { styles } from './Styles'
import { useProvider } from '../../context/AlertContext'
import Loader from '../../components/Loader/Loader'
import { useValidation } from '../../services/validation'
import { IMaskInput } from 'react-imask'

export default function Payment(props) {
  const { loading } = useProvider()
  const name = props.location.name
  const formik = useValidation()
  return (
    <Container>
      <Form style={styles.form} onSubmit={formik.handleSubmit}>
        <Row>
          <Col>
            <Form.Group style={styles.formGroup} controlId="formNumber">
              <label htmlFor="number">Номер телефона</label>
              <IMaskInput
                mask={'+{7}(000)000-00-00'}
                radix="."
                name="number"
                id="number"
                unmask={false}
                {...formik.getFieldProps('number')}
              />
              <div className="form-feedback">
                {formik.errors.number && formik.touched.number
                  ? formik.errors.number
                  : null}
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group style={styles.formGroup} controlId="formAmount">
              <label htmlFor="amount" style={styles.label}>
                Сумма
              </label>
              <IMaskInput
                radix="."
                name="amount"
                id="amount"
                unmask={false}
                {...formik.getFieldProps('amount')}
              />
              <div className="form-feedback">
                {formik.errors.amount && formik.touched.amount
                  ? formik.errors.amount
                  : null}
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group style={styles.formGroup}>
              <label htmlFor="operator">Мобильный оператор</label>
              <select id="operator" defaultValue={name} style={styles.select}>
                <option value="MTS">MTS</option>
                <option value="BEELINE">BEELINE</option>
                <option value="MEGAFON">MEGAFON</option>
              </select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group style={styles.formGroup}>
              <Button style={styles.button} variant="primary" type="submit">
                {loading ? <Loader /> : 'ОПЛАТИТЬ'}
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
