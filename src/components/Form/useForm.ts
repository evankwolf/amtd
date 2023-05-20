import { useReducer, useState } from 'react'

export interface FieldDetail {
  name: string
  value: string
  rules: any[]
  isValid: boolean
  errors: any[]
}

export interface FieldState {
  [key: string]: FieldDetail
}

export interface FormState {
  isValid: boolean
}

export interface FieldAction {
  type: 'addField' | 'updateField'
  name: string
  value: any
}

const fieldsReducer = (state: FieldState, action: FieldAction): FieldState => {
  switch (action.type) {
    case 'addField':
      return {
        ...state,
        [action.name]: { ...action.value },
      }
    case 'updateField':
      return {
        ...state,
        [action.name]: { ...state[action.name], value: action.value },
      }
    default:
      return state
  }
}

export const useForm = () => {
  const [form, setForm] = useState<FormState>({ isValid: true })
  const [fields, dispatch] = useReducer(fieldsReducer, {})

  return {
    fields,
    dispatch,
    form,
  }
}
