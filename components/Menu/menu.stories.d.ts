import { Menu } from './menu';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Menu>;
/**
 * A basic menu component. It has both `vertical` and `horizontal` version.
 *
 * You can also set `defaultIndex` to highlight the menu item when user first loads the page.
 *
 * It includes `MenuItem` and `SubMenu` component.
 */
declare const MenuMeta: Meta<typeof Menu>;
export default MenuMeta;
export declare const Default: Story;
export declare const WithSubmenu: Story;
export declare const VerticalMenu: Story;
export declare const DefaultIndex: Story;
