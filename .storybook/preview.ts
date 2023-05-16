import type { Preview } from "@storybook/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@/styles/index.scss"

library.add(fas)
const preview: Preview = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
