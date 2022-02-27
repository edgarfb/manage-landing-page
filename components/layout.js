import { useState } from "react";
import NavbarMobile from "./navbarMobile";
import Footer from "./footer";
import { chakra, Container, Box } from "@chakra-ui/react";
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
  const [navBg, setNavBg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      bg="white"
      minW="320px"
      maxW="full"
      height={isOpen ? "100vh" : "auto"}
      p={0}
      position="relative"
      overflow="hidden"
    >
      <NavbarMobile
        bg={navBg}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <BgPattern />
      <chakra.main>{children}</chakra.main>
      <Footer />
    </Container>
  );
}
