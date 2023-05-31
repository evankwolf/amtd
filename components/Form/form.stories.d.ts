import { Form } from './form';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Form>;
/**
 * Form Component. It offers validation function which is based on [AsyncValidator](https://github.com/yiminghe/async-validator)
 *
 * It also offers `onValueChange` callback for you to do something while values change.
 *
 * `onFinish` will be called when you click submit button and all fields are valid.
 *
 */
declare const FormMeta: Meta<typeof Form>;
export default FormMeta;
export declare const BasicForm: Story;
export declare const FieldWithRule: Story;
export declare const CustomRules: Story;
