import { Alert } from './alert';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Alert>;
declare const AlertMeta: Meta<typeof Alert>;
export default AlertMeta;
export declare const DefaultType: Story;
export declare const SuccessType: Story;
export declare const DangerType: Story;
export declare const WarningType: Story;
