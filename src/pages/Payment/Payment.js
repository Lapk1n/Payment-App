import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { styles } from './Styles'
import { useProvider } from '../../context/AlertContext'
import Loader from '../../components/Loader/Loader'
import { useValidation } from '../../services/validation'

export default function Payment(props) {
  const { loading } = useProvider()
  const name = props.location.name

  const formik = useValidation()
  return (
    <Container>
      <Form style={styles.form} onSubmit={formik.handleSubmit}>
        <Row>
          <Col>
            <Form.Group style={styles.formGroup} controlId="formBasicEmail">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                placeholder="8 (999) 999-99-99"
                isInvalid={formik.errors.number && formik.touched.number}
                name="number"
                {...formik.getFieldProps('number')}
                type="number"
              />
              <div className="form-feedback">
                {formik.errors.number && formik.touched.number
                  ? formik.errors.number
                  : null}
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group style={styles.formGroup} controlId="formBasicPassword">
              <Form.Label>Сумма</Form.Label>
              <Form.Control
                isInvalid={formik.errors.amount && formik.touched.amount}
                name="amount"
                {...formik.getFieldProps('amount')}
                type="number"
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
              <Form.Label>Мобильный оператор</Form.Label>
              <Form.Control defaultValue={name} size="lg" as="select">
                <option value="MTS">MTS</option>
                <option value="BEELINE">BEELINE</option>
                <option value="MEGAFON">MEGAFON</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button style={styles.button} variant="primary" type="submit">
              {loading ? <Loader /> : 'ОПЛАТИТЬ'}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
