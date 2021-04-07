import React from 'react'
import { CardDeck, Container } from 'react-bootstrap'
import OperatorsCard from '../../components/OperatorsCard/OperatorsCard'
import { data } from '../../data/operatorsData'
import { DataType } from '../../interfaces'
import { css } from 'aphrodite'
import styles from './stylesheet'

export default function Main() {
  const operatorsData: DataType[] = data
  return (
    <Container>
      <CardDeck className={css(styles.cardDeck)}>
        {operatorsData.map((item) => (
          <OperatorsCard key={item.id} {...item} />
        ))}
      </CardDeck>
    </Container>
  )
}
