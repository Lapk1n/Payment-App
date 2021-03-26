import React from 'react'
import { CardDeck, Container } from 'react-bootstrap'
import { operators } from '../../data/operators'
import OperatorsCard from '../../components/OperatorsCard/OperatorsCard'

export default function Main() {
  return (
    <Container>
      <CardDeck>
        {operators.map((item) => (
          <OperatorsCard key={item.id} {...item} />
        ))}
      </CardDeck>
    </Container>
  )
}
