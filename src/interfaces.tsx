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
export type InitType = {
  loading: boolean
  visible: boolean
  value?: string
  title?: string
}
export type ActionType = {
  type: string
  value?: string
  title?: string
}
export type DataType = {
  id: number
  name: string
  src: string
}
export type ValuesType = {
  number?: string
  amount?: string
  loading: boolean
}
