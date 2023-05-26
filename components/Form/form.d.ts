import type { FormHTMLAttributes } from 'react';
import React from 'react';
import { FormItem } from './formItem';
import { useForm } from './useForm';
import type { FormErrors, FormState } from './useForm';
type FormComponent = React.ForwardRefExoticComponent<FormProps & React.RefAttributes<IFormRef>> & {
    Item: typeof FormItem;
};
export type RenderProps = (form: FormState) => React.ReactNode;
export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'children' | 'getFieldsValue' | 'setFieldValue' | 'resetFields'> {
    children?: React.ReactNode | RenderProps;
    name?: string;
    initialValues?: Record<string, any>;
    /** validation success callback */
    onFinish?: (values: Record<string, any>) => void;
    /** validation failed callback */
    onFinishFailed?: (values: Record<string, any>, errors: FormErrors) => void;
}
export type IFormContext = Omit<ReturnType<typeof useForm>, 'form' | 'getFieldValue' | 'getFieldsValue' | 'setFieldValue' | 'resetFields' | 'validateAllFields'> & Pick<FormProps, 'initialValues'>;
export type IFormRef = Omit<ReturnType<typeof useForm>, 'fields' | 'dispatch' | 'form'>;
export declare const FormContext: React.Context<Omit<{
    fields: import("./useForm").FieldState;
    dispatch: React.Dispatch<import("./useForm").FieldAction>;
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
}, "form" | "getFieldsValue" | "setFieldValue" | "resetFields" | "validateAllFields" | "getFieldValue"> & Pick<FormProps, "initialValues">>;
export declare const Form: FormComponent;
export default Form;