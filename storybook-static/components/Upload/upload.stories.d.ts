import { Upload } from './upload';
import type { Meta, StoryFn } from '@storybook/react';
type Story = StoryFn<typeof Upload>;
declare const UploadMeta: Meta<typeof Upload>;
export default UploadMeta;
export declare const Playground: Story;
export declare const BiggerFileUpload: Story;
export declare const DraggableUpload: Story;
