import { chakra, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function NavbarMobile() {
  return (
    <chakra.nav
      position="relative"
      px={4}
      py={8}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="full"
      zIndex={100}
    >
      <Image src="/images/logo.svg" alt="" />
      <Image src="/images/icon-hamburger.svg" alt="" zIndex={100} />
    </chakra.nav>
  );
}