import { useFormik } from 'formik'
import { useProvider } from '../context/AlertContext'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
const url = process.env.REACT_APP_DB_URL
const initialValues = {
  number: '',
  amount: '',
  loading: false,
}

const validationSchema = Yup.object({
  number: Yup.string()
    .min(11, 'Количество цифр не менее 11')
    .max(11, 'Количество цифр не более 11')
    .required('Обязательное поле'),
  amount: Yup.number()
    .min(1, 'Сумма не менее 1')
    .max(1000, 'Сумма не более 1000')
    .required('Обязательное поле'),
})

export const useValidation = () => {
  const history = useHistory()
  const handleHistory = () => {
    history.push('/')
  }

  const {
    showLoader,
    hideLoader,
    showAlertSuccess,
    showAlertFail,
    hideAlert,
  } = useProvider()

  const onSubmit = async (value) => {
    showLoader()
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve()
          } else {
            reject()
          }
        }, 2500)
      })

      const data = {
        ...value,
        date: new Date().toJSON(),
      }
      await axios.post(`${url}/data.json`, data)

      showAlertSuccess()
      setTimeout(() => handleHistory(), 1500)
    } catch (e) {
      showAlertFail()
    } finally {
      setTimeout(() => hideLoader())
    }
    setTimeout(() => hideAlert(), 3500)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return formik
}
