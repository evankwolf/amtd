import { Upload } from './upload';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Upload>;
/**
 * Many thanks to the apis being used in the demo
 *
 * 1. [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
 * 2. [Mocky](https://designer.mocky.io/)
 *
 * Apart from uploading by clicks, you can try to drag and drop down files <a href="#draggable-upload">here</a>
 *
 */
declare const UploadMeta: Meta<typeof Upload>;
export default UploadMeta;
/**
 * Try to upload some small file ( < 200kb)
 */
export declare const Default: Story;
/**
 * This api accepts bigger file
 */
export declare const BiggerFileUpload: Story;
/**
 * Try to drag some files and drop in the zone
 */
export declare const DraggableUpload: Story;
