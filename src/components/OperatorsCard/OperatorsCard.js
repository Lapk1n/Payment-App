import React from 'react'
import { Card, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { css } from 'aphrodite'
import styles from './stylesheet'

const OperatorsCard = ({ avatar, name }) => {
  return (
    <Card className={css(styles.card)}>
      <Card.Img className={css(styles.cardImg)} variant="top" src={avatar} />
      <Card.Body className={css(styles.cardBody)}>
        <NavLink to={{ pathname: `/payment`, name: name }}>
          <Button variant="primary">ОПЛАТИТЬ</Button>
        </NavLink>
      </Card.Body>
    </Card>
  )
}
OperatorsCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
export default OperatorsCard
