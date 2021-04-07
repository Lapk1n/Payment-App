import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { css } from 'aphrodite'
import styles from './stylesheet'
import { useHistory } from 'react-router-dom'
import { ICard } from '../../../interfaces'

const OperatorsCard: React.FC<ICard> = ({ src, name }) => {
  const history = useHistory()
  const handleHistory = () => {
    history.push({
      pathname: `/payment`,
      search: `?operator=${name}`,
    })
  }

  return (
    <Card className={css(styles.card)}>
      <Card.Img className={css(styles.cardImg)} variant="top" src={src} />
      <Card.Body className={css(styles.cardBody)}>
        <Button onClick={handleHistory} variant="primary">
          ОПЛАТИТЬ
        </Button>
      </Card.Body>
    </Card>
  )
}

export default OperatorsCard
