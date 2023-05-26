import React from 'react';
export interface MenuItemProps {
    children?: React.ReactNode;
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
