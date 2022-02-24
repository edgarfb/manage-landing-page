import { chakra, Flex, Image } from "@chakra-ui/react";

export default function Stats() {
  return (
    <chakra.section position="relative" zIndex={90} p={4}>
      <Flex>
        <Image src="/images/illustration-intro.svg" alt="" />
      </Flex>
    </chakra.section>
  );
}
