import Testimonials from "./testimonials";
import { useEffect, useState } from "react";
import testimonialData from "./testimonials-data.js";
import { Box, Flex, useBreakpointValue, Heading } from "@chakra-ui/react";
import GetStartedLink from "../components/get-started-link";

function Dot({ onClick, bg }) {
  // It will get the background color of the dot based on the index of the cuurenSlide

  return (
    <Box
      width="10px"
      height="10px"
      onClick={onClick}
      borderRadius="50%"
      borderWidth={1}
      borderColor="brand.BrightRed"
      bg={bg}
    ></Box>
  );
}

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bp = useBreakpointValue({ base: "sm", md: "md" });

  useEffect(() => {
    if (currentSlide === testimonialData.length - 1) {
      setTimeout(() => {
        setCurrentSlide(0);
      }, 4500);
    }
    const item = setTimeout(() => {
      setCurrentSlide(currentSlide + 1);
    }, 5000);
    return () => clearTimeout(item);
  }, [currentSlide]);

  return (
    <>
      <Box>
        <Heading
          as="h2"
          size="lg"
          mb={12}
          textAlign="center"
          color="brand.DarkBlue"
        >
          What they&apos;ve said
        </Heading>
        {bp === "sm" && (
          <Testimonials
            key={testimonialData[currentSlide].name}
            userData={testimonialData[currentSlide]}
          />
        )}
        {bp === "md" && (
          <Flex width={{ lg: "80%" }} m="0 auto">
            {testimonialData.slice(0, 3).map((user) => (
              <Testimonials key={user.name} userData={user} />
            ))}
          </Flex>
        )}

        {bp === "sm" && (
          <Flex justify="center" mt={4}>
            <Flex gap={1}>
              {testimonialData.map((user, index) => {
                return (
                  <Dot
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    // Moment aha! :)
                    bg={currentSlide === index ? "brand.BrightRed" : ""}
                  />
                );
              })}
            </Flex>
          </Flex>
        )}
        <Flex justify="center">
          <GetStartedLink />
        </Flex>
      </Box>
    </>
  );
}
