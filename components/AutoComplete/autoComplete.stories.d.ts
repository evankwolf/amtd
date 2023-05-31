import { AutoComplete } from './autoComplete';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof AutoComplete>;
/**
 * This component is based on `Input` component.
 * Just try to type several letters in the input
 * <a href="/amtd/?path=/story/datainput-autocomplete--fetch-github-user">here</a>.
 * All data is fetched from Github.
 *
 * You can get input value and return results using `fetchSuggestions` attr.
 *
 * The `renderOption` can help you customize the suggestion items display.
 * You can check the example <a href="#customize-render">here</a>.
 *
 * It also has the same props as `Input` component does since it's based on the latter.
 *
 * > Many thanks to github so that we can fetch github users as a demo.
 */
declare const AutoCompleteMeta: Meta<typeof AutoComplete>;
export default AutoCompleteMeta;
export declare const FetchGithubUser: Story;
export declare const LoadingState: Story;
export declare const CustomizeRender: Story;
