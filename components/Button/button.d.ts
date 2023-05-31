import React from 'react';
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface IBaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    /** Button color type */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export declare const Button: React.FC<ButtonProps>;
export default Button;
