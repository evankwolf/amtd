import React from 'react';
import type { CSSTransitionProps } from 'react-transition-group/CSSTransition';
type AnimationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';
type TransitionProps = CSSTransitionProps & {
    timeout?: number;
    animation?: AnimationName;
};
export declare const Transition: React.FC<TransitionProps>;
export default Transition;
