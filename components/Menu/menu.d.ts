import React from 'react';
import MenuItem from './menuItem';
import SubMenu from './subMenu';
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;
export type MenuComponent = React.FC<MenuProps> & {
    Item: typeof MenuItem;
    SubMenu: typeof SubMenu;
};
export interface MenuProps {
    children?: React.ReactNode;
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    defaultOpenSubMenu?: boolean;
    onSelect?: (selectedIndex: string) => void;
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenu?: boolean;
}
export declare const MenuCtx: React.Context<IMenuContext>;
export declare const Menu: MenuComponent;
export default Menu;
