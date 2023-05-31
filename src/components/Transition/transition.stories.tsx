import React, { useState } from 'react'

import { Transition } from './transition'

import type { Meta, StoryFn } from '@storybook/react'

import { Alert } from '../Alert/alert'
import { Button } from '../Button/button'

type Story = StoryFn<typeof Transition>

/**
 * This component is based on the `CSSTransition` component from
 * [React Transition Group](https://reactcommunity.org/react-transition-group/). So you can
 * pass almost the same API to this component as to `CSSTransition`
 *
 */
const TransitionMeta: Meta<typeof Transition> = {
  title: 'General/Transition',
  component: Transition,

}

export default TransitionMeta

export const Playground: Story = (args) => {
  const [show, setShow] = useState(true)
  return (
    <>
      <Button onClick={() => setShow(!show)}>
        Click to toggle the Alert below
      </Button>
      <hr />
      <Transition
        {...args}
        in={args.show || show}
        timeout={args.timeout || 300}
        animation={args.animation || 'zoom-in-top'}
      >
        <Alert header="Header">
          This Alert is used for Transition.
        </Alert>
      </Transition>
    </>
  )
}
