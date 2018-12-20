import { FormRuleValidator } from '../form'
import Vue from 'vue';

function emptyValue (value: any): boolean {
  return value === undefined || value === null || value === ''
}

function getMessage(path: string, ...params: Array<string | number>): string {
    return Vue.prototype.$vua.lang.t(path, ...params)
}

const requiredValidator: FormRuleValidator = ({ prop, message }, value) => {
  if (emptyValue(value)) return Promise.reject(new Error(message || getMessage('form.validator.required', prop)))
  return Promise.resolve()
}

const numberValidator: FormRuleValidator = ({ prop, max, min, message }, value) => {
  if (emptyValue(value)) return Promise.resolve()
  if (isNaN(value)) return Promise.reject(new Error(message || getMessage('form.validator.isNumber', prop)))
  if (isNaN(max)) max = Infinity
  if (isNaN(min)) min = -Infinity
  if (value > max || value < min) return Promise.reject(new Error(message || getMessage('form.validator.betweenNumber', prop, min, max)))
  return Promise.resolve()
}

const lengthValidator: FormRuleValidator = ({ prop, max, min, message }, value) => {
  if (emptyValue(value)) return Promise.resolve()
  if (isNaN(max)) max = Infinity
  if (isNaN(min)) min = -Infinity
  let length = value.length
  if (length > max || length < min) return Promise.reject(new Error(message || getMessage('form.validator.length', prop, min, max)))
  return Promise.resolve()
}

const buildinValidatorMap = new Map<string, FormRuleValidator>()
buildinValidatorMap.set('required', requiredValidator)
buildinValidatorMap.set('length', lengthValidator)
buildinValidatorMap.set('number', numberValidator)

export {
  buildinValidatorMap
}
