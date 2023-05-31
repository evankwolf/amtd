import type { FC } from 'react';
import React from 'react';
import type { ThemeProps } from '../Icon/icon';
export interface ProgressProps {
    /** Integer percent
     * e.g.
     *
     * 98 ✔
     *
     * 0.98 ❌
     */
    percent: number;
    /** Height of the progress bar */
    strokeHeight?: number;
    /** Set true if you want to show the percentage text */
    showText?: boolean;
    /** Custom styles */
    styles?: React.CSSProperties;
    /** Bar color */
    theme?: ThemeProps;
}
export declare const Progress: FC<ProgressProps>;
export default Progress;
