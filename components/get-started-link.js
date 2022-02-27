import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function GetStartedLink({ white = false }) {
  return (
    <NextLink href={"/get-started"} passHref>
      <Link
        href="/get-started"
        boxShadow="lg"
        my={4}
        bg={`${white ? "white" : "brand.BrightRed"}`}
        color={`${white ? "brand.BrightRed" : "white"}`}
        py={2}
        px={6}
        borderRadius={40}
        fontSize=".8rem"
        fontWeight={600}
        textAlign="center"
      >
        Get Started
      </Link>
    </NextLink>
  );
}
