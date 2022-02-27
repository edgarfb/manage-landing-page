import Testimonials from "./testimonials";
import { useEffect, useState } from "react";
import testimonialData from "./testimonials-data.js";
import { Box, Flex } from "@chakra-ui/react";
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
    <Box>
      <Testimonials
        key={testimonialData[currentSlide].name}
        userData={testimonialData[currentSlide]}
      />

      <Flex justify="center" mt={4}>
        <Flex gap={1}>
          {testimonialData.map((user, index) => {
            console.log("index", index);
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
      <Flex justify="center">
        <GetStartedLink />
      </Flex>
    </Box>
  );
}
