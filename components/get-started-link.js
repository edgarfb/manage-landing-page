import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function GetStartedLink({ white = false }) {
  return (
    <NextLink href="https://www.edgarbritez.com/" passHref>
      <Link
        boxShadow="lg"
        my={8}
        bg={`${white ? "white" : "brand.BrightRed"}`}
        color={`${white ? "brand.BrightRed" : "white"}`}
        py={2}
        px={6}
        borderRadius={40}
        fontSize=".8rem"
        fontWeight={600}
        textAlign="center"
        _hover={{
          textDecoration: "none",
          backgroundColor: `${white ? "" : "brand.BrightRedLight"}`,
          color: `${white ? "brand.BrightRedLight" : "white"}`,
        }}
      >
        Get Started
      </Link>
    </NextLink>
  );
}
