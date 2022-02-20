import NavbarMobile from "./navbarMobile";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Container bg="red.300" maxW="full" minH="100vh">
      <NavbarMobile />
      <main>{children}</main>
    </Container>
  );
}
