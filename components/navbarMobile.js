import { chakra, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function NavbarMobile() {
  return (
    <chakra.nav
      p={2}
      bg="red.600"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src="/images/logo.svg" alt="" width={60} height={16} />
      <Image src="/images/icon-hamburger.svg" alt="" width={20} height={16} />
    </chakra.nav>
  );
}
