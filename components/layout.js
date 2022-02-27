import { useState } from "react";
import NavbarMobile from "./navbarMobile";
import Footer from "./footer";
import { chakra, Container, Box } from "@chakra-ui/react";

function BgPattern() {
  return (
    <Box
      width={{ base: "400px", lg: "600px" }}
      height={{ base: "400px", lg: "600px" }}
      position="absolute"
      top={{ base: "-3%", lg: "-7%" }}
      right={{ base: "-30%", lg: "-13%" }}
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
