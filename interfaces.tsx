export interface IField {
  labelName: string
  formId: string
  mask: object
  inputName: string
  formikProps: any
}
export interface ICard {
  avatar: string
  name: string
}
export interface IAlertContext {
  alert: object
  hideAlert: React.FC
  showLoader: React.FC
  loading: boolean
  visible: boolean
  showAlertFail: React.FC
  hideLoader: React.FC
  showAlertSuccess: React.FC
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
