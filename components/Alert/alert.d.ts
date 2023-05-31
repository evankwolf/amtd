import React from 'react';
type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
    children?: string | React.ReactNode;
    /** Alert type, different types represent different colors */
    type?: AlertType;
    /** Alert header text */
    header?: string;
    /** Set true to show close button and make the component closable */
    closable?: boolean;
    /** Callback when alert is closed through the close button */
    onClose?: () => void;
}
export declare const Alert: React.FC<AlertProps>;
export default Alert;
