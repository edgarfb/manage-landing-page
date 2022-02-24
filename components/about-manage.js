import { chakra, Heading, Text } from "@chakra-ui/react";
import AboutManageList from "./about-manage-list";

export default function AboutManage() {
  return (
    <>
      <chakra.section p={4}>
        <Heading as="h2" size="lg" mb={4} color="brand.DarkBlue">
          What&apos;s different about Manage?
        </Heading>
        <Text>
          Manage provides all the functionality ypur team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </Text>
      </chakra.section>
      <AboutManageList />
    </>
  );
}
