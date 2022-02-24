import { chakra, Heading, Text, Button, Flex } from "@chakra-ui/react";

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
        <Button
          boxShadow="lg"
          my={4}
          bg="orange.500"
          color="white"
          py={2}
          px={6}
          borderRadius={40}
          fontSize=".8rem"
        >
          Get Started
        </Button>
      </Flex>
    </chakra.section>
  );
}
