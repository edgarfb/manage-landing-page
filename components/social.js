import { chakra, Flex, Box, Image } from "@chakra-ui/react";

export default function Social({ socialItems }) {
  return (
    <Flex justify="center" m={4} width="full">
      <Flex gap={2} justify="center" width="full">
        {socialItems.map((item) => {
          return (
            <Box
              as="a"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              mr={4}
              width="30px"
              height="30px"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width="30px"
                height="30px"
              />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
