import { chakra, Heading, Flex, Button } from "@chakra-ui/react";

export default function SimplifyBox() {
  return (
    <chakra.section
      py={16}
      px={4}
      bg="brand.BrightRed"
      mt={8}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Heading
        as="h2"
        fontWeight={500}
        fontSize="40"
        textAlign="center"
        color="white"
      >
        Simplify how your team works today.
      </Heading>
      <Flex justify="center">
        <Button
          borderRadius={40}
          mt={4}
          bg="white"
          color="brand.BrightRed"
          fontSize=".8rem"
        >
          Get Started
        </Button>
      </Flex>
    </chakra.section>
  );
}
