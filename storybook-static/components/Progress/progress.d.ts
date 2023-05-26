import type { FC } from 'react';
import React from 'react';
import type { ThemeProps } from '../Icon/icon';
export interface ProgressProps {
    /** integer percent
     * e.g.
     *
     * 98 ✔
     *
     * 0.98 ❌
     */
    percent: number;
    /** height of the progress bar */
    strokeHeight?: number;
    /** set true if you want to show the percentage text */
    showText?: boolean;
    /** custom styles */
    styles?: React.CSSProperties;
    /** bar color */
    theme?: ThemeProps;
}
export declare const Progress: FC<ProgressProps>;
export default Progress;
