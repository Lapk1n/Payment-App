import React, { useEffect, useState } from 'react'
import { CardDeck, Container } from 'react-bootstrap'
import OperatorsCard from '../../components/OperatorsCard/OperatorsCard'
import { dataBase } from '../../base'
import { css } from 'aphrodite'
import styles from './stylesheet'
import Loader from '../../components/Loader/Loader'
import { useAlertContext } from '../../context/AlertContext'

export default function Main() {
  const { showLoader, hideLoader, loading } = useAlertContext()

  const [images, setImages] = useState([])

  useEffect(() => {
    showLoader()
    const fetchImages = async () => {
      const logosCollection = await dataBase.collection('images').get()
      setImages(
        logosCollection.docs.map((doc) => {
          return doc.data()
        })
      )
      hideLoader()
    }
    fetchImages()
  }, [])

  return (
    <Container>
      <CardDeck className={css(styles.cardDeck)}>
        {loading ? (
          <Loader />
        ) : (
          images.map((image) => <OperatorsCard key={image.id} {...image} />)
        )}
      </CardDeck>
    </Container>
  )
}
