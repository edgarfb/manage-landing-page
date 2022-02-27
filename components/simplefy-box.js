import { chakra, Heading, Flex, Button } from "@chakra-ui/react";
import GetStartedLink from "./get-started-link";

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
        <GetStartedLink white={true} />
      </Flex>
    </chakra.section>
  );
}
