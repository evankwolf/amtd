import { Transition } from './transition';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Transition>;
/**
 * This component is based on the `CSSTransition` component from
 * [React Transition Group](https://reactcommunity.org/react-transition-group/). So you can
 * pass almost the same API to this component as to `CSSTransition`
 *
 */
declare const TransitionMeta: Meta<typeof Transition>;
export default TransitionMeta;
export declare const Playground: Story;
