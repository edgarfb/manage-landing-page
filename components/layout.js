import NavbarMobile from "./navbarMobile";
import Footer from "./footer";
import { Container, Box } from "@chakra-ui/react";
import Image from "next/image";

function BgPattern() {
  return (
    <Box
      width="400px"
      height="400px"
      position="absolute"
      top="-3%"
      left="11%"
      overflow="hidden"
      zIndex={1}
      backgroundImage="url('/images/bg-tablet-pattern.svg')"
      backgroundPosition={["center", "center"]}
      backgroundSize="contain"
      bgRepeat="no-repeat"
    ></Box>
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
