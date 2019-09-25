export type FormLabelPosition = 'top' | 'left' | 'right'

export type FormValidateStatus = 'valid' | 'invalid' | 'warning' | 'validating' | 'unvalid'

export interface FormValidateError {
    prop: string
    message: string
    [key: string]: any
}

export interface FormValidatorRule {
    prop: string
    trigger: 'change' | 'blur'
    message?: string
    [key: string]: any
}

export interface FormRuleValidator {
    (rule: FormValidatorRule, value: any): Promise<any>
}

export interface FormRule {
    message: string
    trigger: 'change' | 'blur'
    validator: string | FormRuleValidator
}

export type FormLayout = 'horizontal' | 'vertical'

export interface FormFieldValidateResult {
    valid: boolean
    prop: string
    errors: FormValidateError[]
}

export interface FormValidateResult {
    valid: boolean
    errors: Record<string, FormValidateError[]>
}
