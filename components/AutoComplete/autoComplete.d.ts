import React from 'react';
import type { InputProps } from '../Input/input';
interface DataSourceObject {
    value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    /** Input callback. expect to return data as
     *
     * 1. `{ value: something }`
     *
     * 2. Promise. Let's take fetching github user as an example
     *
     * ```tsx
  
     const fetchGithubUsers = (query: string) => fetch(`https://api.github.com/search/users?q=${query}`)
     .then((res) => res.json())
     .then(({ items }) => items.slice(0, 10).map((user: any) => ({ value: user.login, ...user })))
  
      return (
        <AutoComplete
          fetchSuggestions={fetchGithubUsers}
        />
      )
  
     * ```
     *
     */
    fetchSuggestions: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>;
    /** Select callback */
    onSelect: (suggestion: DataSourceType) => void;
    /** Customized suggestions node */
    renderOption?: (data: DataSourceType) => React.ReactNode;
}
export declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
