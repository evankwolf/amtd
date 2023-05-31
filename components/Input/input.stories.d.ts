import { Input } from './input';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Input>;
/**
 * A basic input component.
 *
 * Except for the traditional input functions, you can also set `size`, `icon`, `prepend`
 * and `append` for the component.
 *
 * Icons are based on [FontAwesome](https://fontawesome.com/search)
 */
declare const InputMeta: Meta<typeof Input>;
export default InputMeta;
export declare const Default: Story;
export declare const DifferentSizes: Story;
export declare const DisabledState: Story;
export declare const WithIcon: Story;
export declare const AppendAndPrepend: Story;
