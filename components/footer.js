import { Button, chakra, Flex, Input, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import Social from "./social";
import socialItems from "./social-data";
import Logo from "./logo";

export default function Footer() {
  return (
    <chakra.footer maxW="full" bg="brand.VeryDarkBlue" p={4}>
      <Flex
        width={{ base: "100%", lg: "80%" }}
        flexDirection={{ base: "column", md: "row-reverse" }}
        justify="space-between"
        alignItems={{ base: "center", md: "flex-start" }}
        m="0 auto"
      >
        <Flex
          my={8}
          width="100%"
          flexDirection="column"
          justifyContent={{ md: "center", lg: "flex-end" }}
          alignItems={{ md: "flex-start", lg: "flex-start" }}
        >
          <Flex
            width="100%"
            flexDirection={{ md: "column", lg: "row" }}
            justify="center"
            alignItems={{ md: "flex-start", lg: "center" }}
          >
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
              ml={{ base: 4, md: 0, lg: 4 }}
              mt={{ base: 0, md: 4, lg: 0 }}
              borderRadius={40}
              px={8}
            >
              Go
            </Button>
          </Flex>
          <Text
            mt={4}
            mb={2}
            textAlign="center"
            color="brand.DarkGrayishBlue"
            fontSize=".6rem"
            display={{ base: "block" }}
            width="100%"
            textAlign={{ base: "left", lg: "right" }}
          >
            Copyright 2020. All Rights Reserved
          </Text>
        </Flex>

        <Flex
          color="brand.DarkGrayishBlue"
          fontWeight="700"
          justify="center"
          gap={{ base: 12, lg: 18 }}
          fontSize=".8rem"
          m={{ base: 0, md: 8 }}
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
        <Flex flexDirection={{ base: "column", md: "column-reverse" }}>
          <Social socialItems={socialItems} />
          <Flex
            justify={{ base: "center", md: "flex-start" }}
            m={{ base: 12, md: 4, lg: 8 }}
            mt={{ base: 12, md: 8, lg: 8 }}
          >
            <Logo color="white" />
          </Flex>
        </Flex>

        <Text
          mt={4}
          mb={2}
          textAlign="center"
          color="brand.DarkGrayishBlue"
          fontSize=".6rem"
          display={{ base: "block", md: "none" }}
        >
          Copyright 2020. All Rights Reserved
        </Text>

        <style jsx>{`
          li {
            margin-bottom: 8px;
          }
        `}</style>
      </Flex>
    </chakra.footer>
  );
}
