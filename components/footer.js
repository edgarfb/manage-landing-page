import { Button, chakra, Flex, Input } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <chakra.footer maxW="full" height="400px" bg="brand.VeryDarkBlue" p={4}>
      <Flex>
        <Input placeholder="Updates in your inbox…" />
        <Button bg="brand.BrightRed" color="white" ml={4}>
          Go
        </Button>
      </Flex>

      <Flex color="white" justify="space-between" gap={4}>
        <chakra.ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Products</Link>
          </li>
        </chakra.ul>
        <chakra.ul>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
          <li>
            <Link href="#">Community</Link>
          </li>
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
        </chakra.ul>
      </Flex>
    </chakra.footer>
  );
}
