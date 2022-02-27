import { chakra, Flex, Image } from "@chakra-ui/react";

export default function Stats() {
  return (
    <Flex
      position="relative"
      zIndex={90}
      p={4}
      justify="center"
      width={{ base: "100%", md: "50%" }}
    >
      <Flex>
        <Image src="/images/illustration-intro.svg" alt="" />
      </Flex>
    </Flex>
  );
}
