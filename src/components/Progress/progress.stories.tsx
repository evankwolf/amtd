import React from 'react'

import Progress from './progress'

import type { Meta, StoryFn } from '@storybook/react'

type Story = StoryFn<typeof Progress>

/**
 * A basic progress component.
 *
 * It only offers bar type so far. You can set `strokeHeight` to change the height of the component.
 *
 */
const ProgressMeta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
}

export default ProgressMeta

export const Default: Story = (args) => (
  <Progress
    {...args}
    percent={args.percent ?? 10}
  />
)
