import { chakra, Flex, Box, Image } from "@chakra-ui/react";

export default function Social({ socialItems }) {
  return (
    <Flex justify="center" m={4} width="full">
      <Flex gap={2} justify="center" width="full">
        {socialItems.map((item) => {
          return (
            <Box
              key={item.id}
              as="a"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              mr={4}
              width={{ base: "30px", lg: "20px" }}
              height={{ base: "30px", lg: "20px" }}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={{ base: "30px", lg: "20px" }}
                height={{ base: "30px", lg: "20px" }}
              />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
