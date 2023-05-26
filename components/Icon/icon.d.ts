import React from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    /** font awesome icon name
     * e.g. `arrow-down`
     */
    icon: IconProp;
    /** icon color */
    theme?: ThemeProps;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
