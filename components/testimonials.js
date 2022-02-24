import { chakra, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

// TODO -  add a slider to change between the four users components
export default function Testimonials({}) {
  return (
    <chakra.section>
      <Heading
        as="h2"
        size="lg"
        mb={8}
        textAlign="center"
        color="brand.DarkBlue"
      >
        What they&apos;ve said
      </Heading>
      <Flex justify="center">
        <Image
          src="/images/avatar-ali.png"
          alt="user images"
          width={50}
          height={50}
        />
      </Flex>
      <Heading
        as="h5"
        size="xs"
        my={6}
        textAlign="center"
        color="brand.DarkBlue"
      >
        Ali Bravo
      </Heading>
      <Text textAlign="center" fontSize=".8rem" color="gray.500" p={8}>
        &quot;We have been able to cancel so many other subscriptions since
        using Manage. There is no more cross-channel confusion and eeriyone is
        much more focused.&quot;
      </Text>
      <Flex justify="center">
        <Button
          borderRadius={40}
          fontSize=".8rem"
          bg="brand.BrightRed"
          color="white"
        >
          Get Started
        </Button>
      </Flex>
    </chakra.section>
  );
}
