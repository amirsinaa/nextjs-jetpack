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
          © {new Date().getFullYear()} MIT - Amirsina Shadkami{" "}
        </Text>
      </Flex>
    </Stack>
  );
};

export default Footer;
