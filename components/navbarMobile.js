import { chakra, Box, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./logo";
import { motion, AnimatePresence } from "framer-motion";
export default function NavbarMobile({ bg, isOpen, onClick }) {
  const MotionBox = motion(Box);

  return (
    <chakra.nav
      position="relative"
      zIndex={100}
      onScroll={() => setNavBg("red")}
    >
      <Flex
        px={4}
        py={8}
        alignItems="center"
        justifyContent="space-between"
        width="full"
        height="88px"
        zIndex={100}
        bg={`${isOpen ? "rgba(255, 255, 255, 0.5)" : ""}`}
      >
        <Logo />
        {!isOpen && (
          <Image
            src="/images/icon-hamburger.svg"
            alt=""
            zIndex={100}
            onClick={onClick}
          />
        )}
        {isOpen && (
          <Image
            src="/images/icon-close.svg"
            alt=""
            zIndex={100}
            onClick={onClick}
          />
        )}
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            display={isOpen ? "block" : "none"}
            width="full"
            minHeight="100vh"
            position="fixed"
            top="0"
            bg="linear-gradient(360deg, rgba(144,149,167,.9) 0%, rgba(250,250,250,.9) 100%);"
            zIndex={1000}
            mt="88px"
          >
            <Flex
              bg="white"
              width="calc(100% - 32px)"
              // height="300px"
              py={8}
              m={4}
              position="absolute"
              top="0"
              justify="center"
              alignItems="center"
            >
              <chakra.ul
                listStyleType="none"
                textAlign="center"
                color="brand.DarkBlue"
                fontWeight="700"
              >
                <li>
                  <NextLink href="#">Pricing</NextLink>
                </li>
                <li>
                  <NextLink href="#">Products</NextLink>
                </li>
                <li>
                  <NextLink href="#">About Us</NextLink>
                </li>

                <li>
                  <NextLink href="#">Careers</NextLink>
                </li>
                <li>
                  <NextLink href="#">Community</NextLink>
                </li>

                <style jsx>{`
                  li:not(:last-child) {
                    margin-bottom: 1rem;
                    cursor: pointer;
                  }
                `}</style>
              </chakra.ul>
            </Flex>
          </MotionBox>
        )}
      </AnimatePresence>
    </chakra.nav>
  );
}
