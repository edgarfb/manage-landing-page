import { chakra, Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./logo";
import GetStartedLink from "./get-started-link";

export default function NavbarDesktop({ bg }) {
  return (
    <chakra.nav position="relative" zIndex={100}>
      <Flex
        px={4}
        py={{ base: 8, md: 16 }}
        alignItems="center"
        justifyContent="space-between"
        width="80%"
        m="0 auto"
        height="88px"
        zIndex={100}
      >
        <Logo />
        <chakra.ul
          listStyleType="none"
          textAlign="center"
          color="brand.DarkBlue"
          fontWeight="700"
          display="flex"
          justifyContent="space-evenly"
          gap={4}
        >
          <li>
            <NextLink href="#">Pricing</NextLink>
          </li>
          <li>
            <NextLink href="#">Products</NextLink>
          </li>
          <li>
            <NextLink href="#">About Us</NextLink>
          </li>

          <li>
            <NextLink href="#">Careers</NextLink>
          </li>
          <li>
            <NextLink href="#">Community</NextLink>
          </li>
        </chakra.ul>

        <Box>
          <GetStartedLink />
        </Box>
      </Flex>
    </chakra.nav>
  );
}
