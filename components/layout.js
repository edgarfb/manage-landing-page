import NavbarMobile from "./navbarMobile";
import Footer from "./footer";
import { chakra, Container, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

function BgPattern() {
  return (
    <Box
      width={300}
      height={300}
      position="absolute"
      top="-50"
      right="-10"
      overflow="hidden"
      zIndex={1}
    >
      <Image
        src="/images/bg-tablet-pattern.svg"
        width={300}
        height={300}
        alt=""
      />
    </Box>
  );
}

export default function Layout({ children }) {
  return (
    <Container
      bg="white"
      maxW="full"
      minH="100vh"
      p={0}
      position="relative"
      overflow="hidden"
    >
      <NavbarMobile />
      <BgPattern />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}
