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
  components: {},
  colors: {
    maroon: {
      100: "#800000",
      200: "#800000",
      800: "#ffffff"
    },
    nextjp: {
      100: "#299DA7",
      200: "#1C274D",
    },
    typescript: {
      100: "#3178C6",
      200: "#444D81"
    },
    framermotion: {
      100: "#9A1BE3",
      200: "#C013C5",
    },
    js: {
      100: "#E9D24E"
    },
    react: {
      100: "#5ED3F3"
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