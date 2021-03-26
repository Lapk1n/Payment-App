import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { styles } from './Styles'

const OperatorsCard = ({ ...item }) => {
  return (
    <Container>
      <Card style={styles.card}>
        <Card.Img style={styles.img} variant="top" src={item.src} />
        <Card.Body style={styles.body}>
          <NavLink to={{ pathname: '/payment', name: item.name }}>
            <Button variant="primary">ОПЛАТИТЬ</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </Container>
  )
}
// OperatorsCard.propTypes = {
//   item: PropTypes.object.isRequired,
// }
export default OperatorsCard
