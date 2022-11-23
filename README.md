# Nextjs Jetpack

Nextjs jetpack is an advanced full-featured, ready-for-production starter to boilerplate your new project with it.

🌐 Multi-lingual (support both RTL and LTR).

🌀 Integrated Framer-motion.

🦹🏻‍♀️ Use Chakra-UI or TailwindCSS based on preferences.

🧪 Integrated Storybook, Cypress, jest and React-testing-library for e2e and unit testing.

🎠 Integrated React-query and axios with abstracted API layer.

⌨️ Typescript support.

## Install and configuration

First you need to clone the project

```bash
git clone git@github.com:amirsinaa/nextjs-jetpack.git
```

Then you need to install dependencies

```bash
cd nextjs-jetpack
npm install
```

* If you want to pool an API you need to rename `.env.sample` to `.env` and fill below enviroment variables:

```bash
#your REST-ful api end point
NEXT_PUBLIC_REST_API_URI=http://api.my-backend.com
```

## Available npm commands

There are different available pre-configured commands that you can use :

```bash
npm run dev
```

For running development environment using nextjs internal express

```bash
npm run dev:with-express
```

For running development environment using custom express server located in `./server`

```bash
npm run build:with-express
```

For building using custom express server

```bash
npm run build
```

For building using nextjs internal express

```bash
npm run preview
```

For running a production optimized preview from build command

```bash
npm run test
```

For running all the unit tests in the project using jest

```bash
npm run lint
```

For linting all files in the project

```bash
npm run e2e
```

For running all the End-to-end tests with Cypress

```bash
npm run storybook
```

For running storybook


## Structure

```bash
__tests__/
api
cypress/
hooks/
layouts/
└── default/
    ├── components/
    ├── default.tsx
    └── theme.tsx
locales/
modules/
├── common/
│   └── animation/
└── core/
    ├── layout/
    └── rtl-provider/
pages/
├── dashboard/
├── _app.tsx
├── _document.tsx
├── _error.tsx
├── 404.tsx
└── index.tsx
public/
server/
stories/
styles/
types/
utils/
.env
cypress.config.ts
i18n.json
jest.config.js
next.config.js
postcss.config.js
tailwind.config.js
tsconfig.json
```

* `__tests__` directory is for writing unit tests.
* `api/` directory is for API layer configuration with a base URL.
* `cypress/` directory is for cypress configs and writing e2e tests.
* `hooks/` directory is for general and app wide react custom hooks like a custom hook to access or write in localStorage.
* `layouts/` directory is where templates are located.
* `locales/` directory is for adding translations.
* `modules/` directory is where core , common and other custom modules are located.
* `pages/` directory is where routes and middlewares are located.
* `public/` directory is for static publicly accessible assets.
* `server/` directory is for custom express server.
* `stories/` directory is for writing storybook stories.
* `styles/` directory is for global styles and writing custom scss.
* `types/` directory is for general and app-wide type aliases.
* `utils/` directory is for utility functions e.g. an url formatter.
* `cypress.config.ts` is for cypress configuration.
* `i18n.json` is for translations configuration.
* `jest.config.js` is for jest configuration.
* `next.config.js` is for nextjs global configuration.
* `postcss.config.js` is for pre-processors configuration.
* `tailwind.config.js` is for tailwind configuration.
* `tsconfig.json` is for type script configuration.

## Data fetching

Nextjs Jetpack uses [react-query](https://tanstack.com/query/v4/docs/overview) as the data-fetching solution and [axios](https://axios-http.com/docs/intro) as the HTTP client

## Path aliases

You can access different routes with configured route aliases.
for every essential directory listed above there is a pre-configured route alias

* `@/api/` axios API layer
* `@/pages/` nextjs pages
* `@/hooks/` hooks directory
* `@/modules/` modules directory

and so on ....

Using route aliases makes it easier and cleaner to access different essential routes and components

For example lets say you are in : `./modules/some-modules/components/component-a/index.tsx` and you want to import a hook from general hooks directory without route aliases you end up with something like this : `import { hookA } from ../../../../hooks/hook-a` thats ugly and confusing !.
with the help of route alias you can write : `import { hookA } from '@/hooks/hook-a`.
Now, thats something you can call a readable code

if you want to add more route aliases or change some you can find it in `./tsconfig.json`

You can write new templates or clone existing ones under the `./layouts` directory there's a default template already available that you can get inspired from.

Templates must be structured as below:

```bash
layouts/
└── layout/
    ├── components/
    ├── font-face.tsx
    ├── layout.tsx
    └── theme.tsx
```

#### Components

This folder contains any template-related components like `footer` , `header` etc.

For example:

```tsx
//./layouts/layout/components/footer
import {
  Stack,
  Text,
  Flex
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={1200}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.500"
        >
          © {new Date().getFullYear()}
        </Text>
      </Flex>
    </Stack>
  );
};

export default Footer;

```

#### font-face.tsx

This optional file is responsible for adding custom web fonts to a template if that's what you need.

For example:

```tsx
import { Global } from "@emotion/react"

const Fonts = () => (
  <Global
    styles={`
      @font-face {
          font-family: 'some-web-font';
          src: url("../../static/fonts/some-web-font/woff2/some-web-font.woff2") format("woff2");
          font-weight: 500;
          font-style: normal;
        }
      `}
  />
)
export default Fonts
```

#### theme.tsx

This file contains your template variables,colors etc

For example:

```tsx
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: '#333',
        bg: '#fff',
        fontSize: "1.2em",
      },
      a: {
        color: "green.600",
        transition: "color 0.25s",
        transitionTimingFunction: "ease-out",
        fontWeight: "500",
        _hover: {
          color: "green.600",
        },
      },
    }),
  },
  colors: {
    maroon: {
      100: "#800000",
      200: "#800000",
      800: "#ffffff"
    }
  },
  icons: {
    close: {
      path: (
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      ),
      viewBox: "0 0 24 24"
    }
  }
});
```

#### layout.tsx

This is the template main file that every other template components/dependencies will be used/called here.

For example:

```tsx

import { NextJsPageRoutingTransition } from "@/modules/common/animation/framer-motion/components/transitions";
import { MotionBox } from "@/modules/common/animation/framer-motion/components/chakra-factory";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Footer from "./components/footer";
import { theme } from "./theme";
import Fonts from "./font-face";

const Layout = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Fonts />
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={NextJsPageRoutingTransition}
        className="layout1"
        textAlign="center"
        fontSize="lg"
        w={["100%", "95%", "90%", "85%", "80%", "75%", "70%"]}
        maxW={1200}
        mx="auto"
      >
        <Box pt='7rem' pb={10}>
          {children}
        </Box>
      </MotionBox>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
```

* **This file should be named what ever the template parent folder name is.**

## Framer motion

You can use [Framer-motion](https://www.framer.com/motion/) in your components the only thing you need to do is writing your animation object in `./modules/common/animation/framer-motion/transitions.tsx` and pass that object to your component.
See [Framer-motion document for more information](https://www.framer.com/developers/guides/)

Also you can use and develop more integrated Chakra-UI + Framer-motion components from `./modules/common/animations/chakra-factory`, below is available components :

* `MotionBox` -> Chakra-ui `<Box>` component
* `MotionFlex` -> Chakra-ui `<Flex>` component
* `MotionImage` -> Chakra-ui `<Image>` component

## Translations
Some english and persian sample translations are already available in `./locales/en` and `./locales/fa`
You can add new translations and modify existing translations in `./locales`. in order to add new translations you need to create namespaces json files that contains translation string and specify with route should use that namespace in `./i18.json`

After that you can use the `useTranslation()` custom hook in your page and pass the namespace

For exampple :

```json
// ./locales/en/dashboard.json
{
  "accessDenied": "Access denied, for viewing this page you need to be logged in.",
  "dashboard": "Dashboard",
  "login": "Login",
  "logout": "Logout"
}
```

```json
//./i18n.json
{
  "locales": ["fa", "en"],
  "defaultLocale": "fa",
  "pages": {
    "/dashboard": ["dashboard"],
  }
}
```

```tsx
import useTranslation from 'next-translate/useTranslation';

export const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
    return (
      <>
        <Alert status='warning'>
          <AlertIcon />
          <AlertTitle>{t('accessDenied')} !</AlertTitle>
        </Alert>
        <br />
        <Button onClick={() => signIn()}>{t('login')}</Button>
      </>
    )
}
```
