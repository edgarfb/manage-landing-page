import { chakra, Stack, Heading, Text } from "@chakra-ui/react";

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

export default function AboutManageList() {
  return (
    <chakra.ul
      width={{ base: "100%", md: "45%" }}
      p={{ base: "0 0 0 1rem", md: "1rem" }}
    >
      {items.map((item) => {
        return (
          <chakra.li key={item.id} listStyleType="none" mb={8}>
            <Stack>
              <Heading
                as="h4"
                fontSize=".8rem"
                bg={{ base: "brand.VeryPaleRed", lg: "white" }}
                py={2}
                borderRadius={40}
                borderRightRadius={0}
                fontWeight="700"
              >
                <chakra.span
                  bg="brand.BrightRed"
                  color="white"
                  py={2}
                  px={6}
                  mr={{ base: 2, lg: 6 }}
                  borderRadius={40}
                  fontSize=".8rem"
                >
                  {item.id}
                </chakra.span>
                {item.title}
              </Heading>
              <Text
                fontSize={{ base: ".8rem", md: "1rem" }}
                color="brand.DarkGrayishBlue"
                ml={{ base: 0, lg: "88px !important" }}
                // ml="88px"
              >
                {item.description}
              </Text>
            </Stack>
          </chakra.li>
        );
      })}
    </chakra.ul>
  );
}
