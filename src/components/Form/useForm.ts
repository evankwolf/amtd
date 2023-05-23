import { useReducer, useState } from 'react'

import Schema from 'async-validator'
import { mapValues, each } from 'lodash-es'

import type { RuleItem, ValidateError } from 'async-validator'

export type CustomRuleFunc = ({ getFieldValue }: any) => RuleItem
export type CustomRule = RuleItem | CustomRuleFunc

export interface FieldDetail {
  name: string
  value: string
  rules: CustomRule[]
  isValid: boolean
  errors: ValidateError[]
}

export interface FieldState {
  [key: string]: FieldDetail
}

export interface ValidateErrorType extends Error {
  errors: ValidateError[]
  fields: FormErrors
}

export type FormErrors = Record<string, ValidateError[]>

export interface FormState {
  /** if all of the form item values are valid */
  isValid: boolean
  /** if the form is under submitting */
  isSubmitting: boolean
  /** all errors */
  errors: FormErrors
}

export interface FieldAction {
  type: 'addField' | 'updateField' | 'updateValidateResult'
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
    case 'updateValidateResult': {
      const { isValid, errors } = action.value
      return {
        ...state,
        [action.name]: { ...state[action.name], isValid, errors },
      }
    }
    default:
      return state
  }
}

export const useForm = () => {
  const [form, setForm] = useState<FormState>({ isValid: true, isSubmitting: false, errors: {} })
  const [fields, dispatch] = useReducer(fieldsReducer, {})

  const getFieldValue = (key: string) => fields[key] && fields[key].value
  const transformRules = (rules: CustomRule[]) => rules.map((rule) => {
    if (typeof rule === 'function') {
      const calledRule = rule({ getFieldValue })
      return calledRule
    }
    return rule
  })
  const validateField = async (name: string) => {
    const { value, rules } = fields[name]
    const handledRules = transformRules(rules)
    const descriptor = {
      [name]: handledRules,
    }
    const valueMap = {
      [name]: value,
    }
    const validator = new Schema(descriptor)
    let isValid = true
    let errors: ValidateError[] = []

    try {
      await validator.validate(valueMap)
    } catch (e) {
      isValid = false
      const err = e as any
      console.log('e', err.errors)
      console.log('fields', err.fields)
      errors = err.errors
    } finally {
      console.log('errors', isValid)
      dispatch({ type: 'updateValidateResult', name, value: { isValid, errors } })
    }
  }

  const validateAllFields = async () => {
    let isValid = true
    let errors: FormErrors = {}
    const valueMap = mapValues(fields, (item) => item.value)
    //  { 'username': abc }
    const descriptor = mapValues(fields, (item) => transformRules(item.rules))
    const validator = new Schema(descriptor)
    setForm({ ...form, isSubmitting: true })
    try {
      await validator.validate(valueMap)
    } catch (e) {
      isValid = false
      const err = e as ValidateErrorType
      errors = err.fields
      each(fields, (value, name) => {
        // there's certain key in errors
        if (errors[name]) {
          const itemErrors = errors[name]
          dispatch({ type: 'updateValidateResult', name, value: { isValid: false, errors: itemErrors } })
        } else if (value.rules.length > 0 && !errors[name]) {
          dispatch({ type: 'updateValidateResult', name, value: { isValid: true, errors: [] } })
        }
      })
    } finally {
      setForm({
        ...form, isSubmitting: false, isValid, errors,
      })
    }

    return {
      isValid,
      errors,
      values: valueMap,
    }
  }

  return {
    fields,
    dispatch,
    form,
    validateField,
    validateAllFields,
  }
}
