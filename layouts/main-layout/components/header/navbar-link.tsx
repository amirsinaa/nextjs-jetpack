import { NavbarLinkProps } from './interface/navbar-link-props'
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <NextLink href={props.path} passHref>
      <Link
        px={3}
        py={1.5}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: "gray.200",
          color: "nextjp.200"
        }}
        onClick={() => props.onClose()}
      >
        {props.name}
      </Link>
    </NextLink>
  );
};