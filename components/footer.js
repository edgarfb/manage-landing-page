import { Button, chakra, Flex, Input, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import Social from "./social";
import socialItems from "./social-data";
import Logo from "./logo";

export default function Footer() {
  return (
    <chakra.footer maxW="full" bg="brand.VeryDarkBlue" p={4}>
      <Flex my={8}>
        <Input
          placeholder="Updates in your inbox…"
          bg="white"
          fontSize=".8rem"
          borderRadius={40}
        />
        <Button
          bg="brand.BrightRed"
          color="white"
          fontSize=".8rem"
          ml={4}
          borderRadius={40}
          px={8}
        >
          Go
        </Button>
      </Flex>

      <Flex
        color="brand.DarkGrayishBlue"
        fontWeight="700"
        justify="center"
        gap={12}
        fontSize=".8rem"
      >
        <chakra.ul listStyleType="none">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
        </chakra.ul>
        <chakra.ul listStyleType="none">
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
      <Social socialItems={socialItems} />
      <Flex justify="center" m={12}>
        <Logo color="white" />
      </Flex>
      <Text
        my={8}
        textAlign="center"
        color="brand.DarkGrayishBlue"
        fontSize=".6rem"
      >
        Copyright 2020. All Rights Reserved
      </Text>

      {/* I wondering if this is correct....  */}
      <style jsx>{`
        li {
          margin-bottom: 8px;
        }
      `}</style>
    </chakra.footer>
  );
}
