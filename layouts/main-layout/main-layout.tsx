import { NextJsPageRoutingTransition } from "@/modules/common/animation/framer-motion/components/transitions";
import { MotionBox } from "@/modules/common/animation/framer-motion/components/chakra-factory";
import { ChakraProvider, Box } from "@chakra-ui/react";
import NavbarMenu from "./components/header/navbar-menu";
import Footer from "./components/footer";
import { theme } from "./theme";

const MainLayout = ({ children }) => {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <NavbarMenu />
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={NextJsPageRoutingTransition}
        className="Main"
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

export default MainLayout;