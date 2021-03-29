import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { styles } from './Styles'

const OperatorsCard = ({ avatar, name }) => {
  return (
    <Container>
      <Card style={styles.card}>
        <Card.Img style={styles.img} variant="top" src={avatar} />
        <Card.Body style={styles.body}>
          <NavLink to={{ pathname: '/payment', name: name }}>
            <Button variant="primary">ОПЛАТИТЬ</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Container>
  )
}
OperatorsCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
export default OperatorsCard