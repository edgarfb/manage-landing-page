import { chakra, Heading, Flex, Box, Image } from "@chakra-ui/react";
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
      position="relative"
    >
      <Heading
        as="h2"
        fontWeight="500"
        fontSize={{ base: "2rem", md: "2.5rem" }}
        textAlign="center"
        color="white"
        zIndex={10}
        letterSpacing="-.06rem"
      >
        Simplify how your team works today.
      </Heading>
      <Flex justify="center" zIndex={10}>
        <GetStartedLink white={true} />
      </Flex>

      <Box
        width="full"
        height="full"
        position="absolute"
        top={0}
        left={0}
        backgroundImage={{
          base: "/images/bg-simplify-section-mobile.svg",
          md: "/images/bg-simplify-section-desktop.svg",
        }}
        backgroundSize={{ base: "contain", lg: "cover" }}
        backgroundRepeat="no-repeat"
      ></Box>
    </chakra.section>
  );
}
