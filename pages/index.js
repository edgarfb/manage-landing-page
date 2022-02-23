import Head from "next/head";

import {
  Stack,
  Flex,
  Box,
  chakra,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

const items = [
  {
    id: "01",
    title: "Track company-wide progress.",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: "02",
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: "03",
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

function Stats() {
  return (
    <chakra.section position="relative" zIndex={100} p={4}>
      <Flex>
        <Image src="/images/illustration-intro.svg" alt="" />
      </Flex>
    </chakra.section>
  );
}

function GetStarted() {
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

function AboutManage() {
  return (
    <>
      <chakra.section p={4}>
        <Heading as="h2" size="lg" mb={4} color="brand.DarkBlue">
          What's different about Manage?
        </Heading>
        <Text>
          Manage provides all the functionality ypur team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </Text>
      </chakra.section>
      <AboutManageList items={items} />
    </>
  );
}

function AboutManageList({ items }) {
  return (
    <chakra.ul width="100%" pl={4}>
      {items.map((item) => {
        return (
          <chakra.li listStyleType="none" mb={8}>
            <Stack>
              <Heading
                as="h4"
                fontSize=".8rem"
                bg="brand.VeryPaleRed"
                py={2}
                borderRadius={40}
                borderRightRadius={0}
              >
                <chakra.span
                  bg="brand.BrightRed"
                  color="white"
                  py={2}
                  px={6}
                  mr={2}
                  borderRadius={40}
                  fontSize=".8rem"
                >
                  {item.id}
                </chakra.span>
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Stack>
          </chakra.li>
        );
      })}
    </chakra.ul>
  );
}

// TODO -  add a slider to change between the four users components
function Testimonials({}) {
  return (
    <chakra.section>
      <Heading
        as="h2"
        size="lg"
        mb={8}
        textAlign="center"
        color="brand.DarkBlue"
      >
        What they've said
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

function SimplifyBox() {
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage landing page challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stats />
      <GetStarted />
      <AboutManage />
      <Testimonials />
      <SimplifyBox />
    </>
  );
}
