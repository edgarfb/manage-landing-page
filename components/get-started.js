import { chakra, Heading, Text, Flex } from "@chakra-ui/react";
import GetStartedLink from "./get-started-link";

export default function GetStarted() {
  return (
    <chakra.section p={4}>
      <Heading as="h1" textAlign="center" mb={4} color="brand.DarkBlue">
        Bring everyone together to build better products.
      </Heading>
      <Text>
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </Text>
      <Flex justify="center">
        <GetStartedLink />
      </Flex>
    </chakra.section>
  );
}
