import { ChakraProvider } from '@chakra-ui/react';
import { addDecorator } from '@storybook/react';
const theme = require('../layouts/main-layout/theme');

addDecorator((story) => <ChakraProvider theme={theme}>{story()}</ChakraProvider>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
