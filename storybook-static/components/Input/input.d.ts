import React from 'react';
import type { InputHTMLAttributes } from 'react';
import type { ThemeProps } from '../Icon/icon';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    iconTheme?: ThemeProps;
    prepend?: React.ReactNode;
    append?: React.ReactNode;
}
export declare const Input: React.FC<InputProps>;
export default Input;
