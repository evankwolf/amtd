import { Alert } from './alert';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Alert>;
/**
 * An alert component.
 *
 * It has different colors by changing the `type` attribute.
 *
 * You can also toggle the `closable` to set if the component is closable.
 */
declare const AlertMeta: Meta<typeof Alert>;
export default AlertMeta;
export declare const DefaultType: Story;
export declare const SuccessType: Story;
export declare const DangerType: Story;
export declare const WarningType: Story;
export declare const AlertWithHeader: Story;
