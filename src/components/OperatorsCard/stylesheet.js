import { StyleSheet } from 'aphrodite'
export default StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '1em',
  },
  cardImg: {
    width: '34%',
    padding: '1rem 1rem',
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
})
