import { Heading, Text, Flex } from "@chakra-ui/react";
import GetStartedLink from "./get-started-link";

export default function GetStarted() {
  return (
    <Flex
      p={4}
      flexDirection={{ base: "column" }}
      width={{ base: "100%", md: "50%" }}
    >
      <Heading
        as="h1"
        textAlign={{ base: "center", md: "left" }}
        mb={4}
        color="brand.DarkBlue"
        fontSize={{ base: "2rem" }}
      >
        Bring everyone together to build better products.
      </Heading>
      <Text
        color="brand.DarkGrayishBlue"
        textAlign={{ base: "center", md: "left" }}
        fontSize={{ base: ".9rem" }}
      >
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </Text>
      <Flex justifyContent={{ base: "center", md: "flex-start" }}>
        <GetStartedLink />
      </Flex>
    </Flex>
  );
}
