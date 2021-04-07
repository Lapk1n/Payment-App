export interface IField {
  labelName: string
  formId: string
  mask: string
  inputName: string
  formikProps: any
}

export interface IAlertContext {
  value?: string
  title?: string
  loading: boolean
  visible: boolean
  hideAlert: () => void
  showLoader: () => void
  showAlertFail: () => void
  hideLoader: () => void
  showAlertSuccess: () => void
}
export type initType = {
  loading: boolean
  visible: boolean
  value?: string
  title?: string
}
export type actionType = {
  type: string
  value?: string
  title?: string
}
export type dataType = {
  id: number
  name: string
  src: string
}
export type valuesType = {
  number?: string
  amount?: string
  loading: boolean
}
