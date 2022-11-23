import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  StackDivider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody
} from "@chakra-ui/react";
import {
  SiGoogletranslate,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiChakraui,
  SiFramer,
  SiReact
} from 'react-icons/si'
import useTranslation from 'next-translate/useTranslation';
import type { GetServerSideProps, NextPage } from "next";
import { useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";

const IndexPage: NextPage = (props: any) => {
  const { t, lang } = useTranslation('home');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="nowrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            as="h1"
            size="xl"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            {t('nextjp')}{" "}
            {t('test-translation')}
          </Heading>

          <Button
            borderRadius="8px"
            background="nextjp.100"
            color="white"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            _hover={{
              bg: "nextjp.200",
              color: "white"
            }}
            onClick={onOpen}
          >
            {t('home-more')}
          </Button>
          <Drawer placement='bottom' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg='nextjp.200'>
              <DrawerBody>
                <Box
                  p='40px'
                  color='white'
                  mt='1'
                  rounded='md'
                  shadow='md'
                >
                  <VStack
                    divider={<StackDivider borderColor='white' />}
                    spacing={3}
                    mt='1'
                    pt='1'
                    width='100%'
                    align='center'
                  >
                    <HStack
                      divider={<StackDivider borderColor='white' />}
                      spacing={2}
                      width='100%'
                      align='center'
                    >
                      <NextLink href="https://www.typescriptlang.org/">
                        <Button
                          size="sm"
                          rounded="md"
                          color={"white"}
                          width={['100%', '350px', '300px']}
                          bg={"typescript.100"}
                          _hover={{
                            bg: "white",
                            color: "typescript.200"
                          }}
                        >
                          <Text px='2' fontSize='md'>TypeScript</Text><SiTypescript />
                        </Button>
                      </NextLink>
                      <NextLink href="https://nextjs.org/">
                        <Button
                          size="sm"
                          rounded="md"
                          width={['100%', '350px', '300px']}
                          color={"white"}
                          bg={"black"}
                          _hover={{
                            bg: "white",
                            color: "black"
                          }}
                        >
                          <Text px='2' fontSize='md'>Next Js</Text><SiNextdotjs />
                        </Button>
                      </NextLink>

                      <NextLink href="https://tanstack.com/query/v4/">
                        <Button
                          size="sm"
                          rounded="md"
                          width={['100%', '350px', '300px']}
                          color={"white"}
                          bg={"reactquery.100"}
                          _hover={{
                            bg: "reactquery.100",
                            color: "reactquery.200"
                          }}
                        >
                          <Text px='2' fontSize='md'>React Query</Text><SiReact />
                        </Button>
                      </NextLink>
                      <NextLink href="https://chakra-ui.com/">
                        <Button
                          size="sm"
                          rounded="md"
                          width={['100%', '350px', '300px']}
                          color={"white"}
                          bg={"nextjp.100"}
                          _hover={{
                            bg: "white",
                            color: "nextjp.100"
                          }}
                        >
                          <Text px='2' fontSize='md'>Chakra UI</Text><SiChakraui />
                        </Button>
                      </NextLink>
                    </HStack>
                  </VStack>
                  <VStack
                    divider={<StackDivider borderColor='white' />}
                    spacing={3}
                    width='100%'
                    mt='1'
                    pt='1'
                    align='center'
                  >
                    <HStack
                      divider={<StackDivider borderColor='white' />}
                      spacing={2}
                      width='100%'
                      align='center'
                    >

                      <NextLink href="/">
                        <Button
                          size="sm"
                          rounded="md"
                          width={['100%', '350px', '300px']}
                          color={"black"}
                          bg={"white"}
                          _hover={{
                            bg: "black",
                            color: "white"
                          }}
                        >
                          <Text px='2' fontSize='sm'>{t('multi-lang-and-rtl')}</Text><SiGoogletranslate />
                        </Button>
                      </NextLink>
                      <NextLink href="/">
                        <Button
                          size="sm"
                          rounded="md"
                          width={['100%', '350px', '300px']}
                          color={"white"}
                          bg={"framermotion.100"}
                          _hover={{
                            bg: "framermotion.200",
                            color: "white"
                          }}
                        >
                          <Text px='2' fontSize='md'>Framer Motion</Text><SiFramer />
                        </Button>
                      </NextLink>
                      <NextLink href="/">
                        <Button
                          size="sm"
                          rounded="md"
                          width={['100%', '350px', '300px']}
                          color={"white"}
                          bg={"js.100"}
                          _hover={{
                            bg: "js.100",
                            color: "black"
                          }}
                        >
                          <Text px='2' fontSize='md'>Cypress/storybook/rtl</Text><SiJavascript />
                        </Button>
                      </NextLink>
                      <NextLink href="https://reactjs.org/">
                        <Button
                          size="sm"
                          rounded="md"
                          width={['100%', '350px', '300px']}
                          color={"white"}
                          bg={"react.100"}
                          _hover={{
                            bg: "react.100",
                            color: "black"
                          }}
                        >
                          <Text px='2' fontSize='md'>React</Text><SiReact />
                        </Button>
                      </NextLink>
                    </HStack>
                  </VStack>
                  <VStack
                    spacing={0}
                    width='100%'
                    align='center'
                    mt='2'
                    pt='2'
                  >
                    <HStack
                      divider={<StackDivider borderColor='white' />}
                      spacing={0}
                      width='100%'
                      align='center'
                    >
                    </HStack>
                  </VStack>

                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src='/static/images/image-placeholder.png' rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
    </>
  );
};

export default IndexPage;
