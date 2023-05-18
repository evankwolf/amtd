import type { FC } from 'react'
import React from 'react'

import type { ThemeProps } from '../Icon/icon'

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

export const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme,
  } = props

  return (
    <div className="amt-progress-bar" style={styles}>
      <div className="amt-progress-bar-outer" style={{ height: `${strokeHeight}px` }}>
        <div
          className={`amt-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
}
export default Progress
