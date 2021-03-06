import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

// TODO -  add a slider to change between the four users components
export default function Testimonials({ userData }) {
  return (
    <Box>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={800}
      >
        <Flex justify="center">
          <Image
            src={userData.image}
            alt={userData.name}
            width="70px"
            height="70px"
          />
        </Flex>
        <Heading
          as="h5"
          size="xs"
          my={6}
          textAlign="center"
          color="brand.DarkBlue"
        >
          {userData.name}
        </Heading>
        <Text
          textAlign="center"
          fontSize=".8rem"
          minH="165px"
          color="gray.500"
          p={8}
        >
          &quot;{userData.testimonial}&quot;
        </Text>
      </MotionBox>
    </Box>
  );
}
