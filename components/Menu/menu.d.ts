import React from 'react';
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;
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
export declare const Menu: React.FC<MenuProps>;
export default Menu;
