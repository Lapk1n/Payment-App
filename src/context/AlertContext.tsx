import React, { useReducer, useContext, ReactNode } from 'react'
import { reducer } from './alertReducer'
import { initType } from '../../interfaces'
import {
  SHOW_PAYMENT_SUCCESS,
  SHOW_PAYMENT_FAIL,
  HIDE_PAYMENT,
  SHOW_LOADER,
  HIDE_LOADER,
} from './types'

const AlertContext = React.createContext({})

export const useAlertContext = () => {
  return useContext(AlertContext)
}

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const initialState: initType = {
    loading: false,
    visible: false,
    value: '',
    title: '',
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const showLoader = (): void => dispatch({ type: SHOW_LOADER })
  const hideLoader = (): void => dispatch({ type: HIDE_LOADER })
  const showAlertSuccess = (value: string, title: string): void =>
    dispatch({ type: SHOW_PAYMENT_SUCCESS, value, title })
  const showAlertFail = (value: string, title: string): void =>
    dispatch({ type: SHOW_PAYMENT_FAIL, value, title })
  const hideAlert = (): void => dispatch({ type: HIDE_PAYMENT })

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

export default AlertProvider
