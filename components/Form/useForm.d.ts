/// <reference types="react" />
import type { RuleItem, ValidateError } from 'async-validator';
export type CustomRuleFunc = ({ getFieldValue }: any) => RuleItem;
export type CustomRule = RuleItem | CustomRuleFunc;
export interface FieldDetail {
    name: string;
    value: string;
    rules: CustomRule[];
    isValid: boolean;
    errors: ValidateError[];
}
export interface FieldState {
    [key: string]: FieldDetail;
}
export interface ValidateErrorType extends Error {
    errors: ValidateError[];
    fields: FormErrors;
}
export type FormErrors = Record<string, ValidateError[]>;
export interface FormState {
    /** if all of the form item values are valid */
    isValid: boolean;
    /** if the form is under submitting */
    isSubmitting: boolean;
    /** all errors */
    errors: FormErrors;
}
export interface FieldAction {
    type: 'addField' | 'updateField' | 'updateValidateResult';
    name: string;
    value: any;
}
export declare const useForm: (initialValues?: Record<string, any>) => {
    fields: FieldState;
    dispatch: import("react").Dispatch<FieldAction>;
    form: FormState;
    validateField: (name: string) => Promise<void>;
    validateAllFields: () => Promise<{
        isValid: boolean;
        errors: FormErrors;
        values: {
            [x: string]: string;
        };
    }>;
    getFieldsValue: () => {
        [x: string]: string;
    };
    getFieldValue: (key: string) => string;
    setFieldValue: (name: string, value: any) => void;
    resetFields: () => void;
};
