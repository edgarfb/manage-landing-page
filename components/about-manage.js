import { chakra, Heading, Text } from "@chakra-ui/react";
import AboutManageList from "./about-manage-list";

export default function AboutManage() {
  return (
    <>
      <chakra.section p={4}>
        <Heading
          as="h2"
          size="lg"
          mb={4}
          color="brand.DarkBlue"
          fontSize={{ base: "1.7rem" }}
          textAlign="center"
          fontWeight="700"
        >
          What&apos;s different about Manage?
        </Heading>
        <Text
          fontSize={{ base: ".8rem" }}
          color="brand.DarkGrayishBlue"
          textAlign="center"
        >
          Manage provides all the functionality ypur team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </Text>
      </chakra.section>
      <AboutManageList />
    </>
  );
}
