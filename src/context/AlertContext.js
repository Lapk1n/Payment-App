import React, { useReducer, useContext } from 'react'
import { reducer } from './AlertReducer'
import {
  SHOW_PAYMENT_SUCCESS,
  SHOW_PAYMENT_FAIL,
  HIDE_PAYMENT,
  SHOW_LOADER,
  HIDE_LOADER,
} from './types'

const AlertContext = React.createContext()

export const useProvider = () => {
  return useContext(AlertContext)
}

export default function AlertProvider({ children }) {
  const initialState = {
    loading: false,
    visible: false,
    value: '',
    title: '',
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })
  const hideLoader = () => dispatch({ type: HIDE_LOADER })
  const showAlertSuccess = (value, title) =>
    dispatch({ type: SHOW_PAYMENT_SUCCESS, value, title })
  const showAlertFail = (value, title) =>
    dispatch({ type: SHOW_PAYMENT_FAIL, value, title })
  const hideAlert = () => dispatch({ type: HIDE_PAYMENT })

  return (
    <AlertContext.Provider
      value={{
        showLoader,
        hideLoader,
        showAlertSuccess,
        showAlertFail,
        hideAlert,
        alert: state,
        loading: state.loading,
        visible: state.visible,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}
