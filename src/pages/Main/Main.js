import React, { useEffect, useState } from 'react'
import { CardDeck, Container } from 'react-bootstrap'

import OperatorsCard from '../../components/OperatorsCard/OperatorsCard'
import { app } from '../../base'
const dataBase = app.firestore()

export default function Main() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      const logosCollection = await dataBase.collection('images').get()
      setImages(
        logosCollection.docs.map((doc) => {
          return doc.data()
        })
      )
    }
    fetchImages()
  }, [])

  return (
    <Container>
      <CardDeck>
        {images.map((image) => (
          <OperatorsCard key={image.id} {...image} />
        ))}
      </CardDeck>
    </Container>
  )
}
