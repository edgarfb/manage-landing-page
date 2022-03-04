import { useState } from "react";
import NavbarMobile from "./navbarMobile";
import NavbarDesktop from "./navbar-desktop";
import Footer from "./footer";
import { chakra, Container, Box, useBreakpointValue } from "@chakra-ui/react";

function BgPattern() {
  return (
    <Box
      width={{ base: "350px", md: "650px" }}
      height={{ base: "350px", md: "650px" }}
      position="absolute"
      // top={{ base: "-3%", lg: "-7%" }}
      // right={{ base: "-30%", lg: "-13%" }}
      top="-120px"
      right="-100px"
      zIndex={1}
      backgroundImage="url('/images/bg-tablet-pattern.svg')"
      backgroundPosition="right"
      backgroundSize="contain"
      bgRepeat="no-repeat"
    ></Box>
  );
}

export default function Layout({ children }) {
  const bp = useBreakpointValue({ base: "sm", md: "md" });
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
      <BgPattern />
      {bp === "sm" && (
        <NavbarMobile
          bg={navBg}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {bp === "md" && (
        <NavbarDesktop
          bg={navBg}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      <chakra.main>{children}</chakra.main>
      <Footer />
    </Container>
  );
}
