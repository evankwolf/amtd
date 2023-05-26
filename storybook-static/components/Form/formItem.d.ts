import React from 'react';
import type { CustomRule } from './useForm';
export interface FormItemProps {
    name: string;
    /** form item label */
    label?: string;
    children?: React.ReactNode;
    valuePropName?: string;
    trigger?: string;
    getValueFromEvent?: (e: any) => any;
    rules?: CustomRule[];
    validateTrigger?: string;
}
export declare const FormItem: React.FC<FormItemProps>;
