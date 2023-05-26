import React from 'react';
import type { InputProps } from '../Input/input';
interface DataSourceObject {
    value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect: (suggestion: DataSourceType) => void;
    renderOption?: (data: DataSourceType) => React.ReactNode;
}
export declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
