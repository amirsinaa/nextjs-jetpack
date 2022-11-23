import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  IconButton,
  useDisclosure,
  Stack
} from "@chakra-ui/react";
import useTranslation from 'next-translate/useTranslation'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from 'react';
import i18nConfig from '@/root/i18n.json';
import { NavbarLink } from './navbar-link'
import { useRouter } from "next/router";

const NavbarMenu = () => {
  const { pathname } = useRouter();
  const { t, lang } = useTranslation("header");
  const { locales, defaultLocale } = i18nConfig;
  const locale = locales.find(localesItem => localesItem !== lang) || defaultLocale;
  const [isInternalPage, setIsInternalPage] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuLinks = [
    { name: t('home'), path: "/" },
    { name: t('about'), path: "/about" },
    { name: 'Tailwind', path: '/tailwind' },
  ];

  useEffect(() => {
    if (pathname.includes("/news/")) {
      setIsInternalPage(true);
    }
  }, [isInternalPage])

  return (
    <Box
      bg="white"
      px={4}
      boxShadow={"md"}
      position="fixed"
      w="100%"
      zIndex="999"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"center"}
        w={["100%", "95%", "90%", "85%", "80%", "75%", "70%"]}
        maxW={1200}
        mx="auto"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={8}
          alignItems={"center"}
          justifyContent={"center"}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >

            {menuLinks.map((link, index) => (
              <NavbarLink
                key={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))
            }


            {!isInternalPage && (<Link href={`/${locale}${(pathname == '/' ? '' : `/${pathname}`)}`} key={locale} >

              <Button
                size="sm"
                rounded="md"
                color={"white"}
                bg={"nextjp.100"}
                _hover={{
                  bg: "nextjp.200",
                  color: "white"
                }}
              >
                {locale.toUpperCase()}
              </Button>
            </Link>)}

          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          w={["100%", "100%", "80%"]}
          maxW={1200}
          display={["inherit", "inherit", "none"]}
        >
          <Stack as={"nav"} spacing={4}>
            {menuLinks.map((link, index) => (
              <NavbarLink
                key={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))
            }

          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default NavbarMenu;
