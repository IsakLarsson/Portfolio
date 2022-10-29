import React, { useRef, useEffect } from "react";
import { Box, Center, Container, Flex } from "@chakra-ui/react";
import { animate, motion, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef);
  useEffect(() => {
    console.log(isInView);
    return () => {};
  }, [isInView]);

  return (
    <section>
      <Flex direction={"column"} alignItems={"center"} height={"100vh"}>
        <motion.div
          ref={aboutRef}
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          whileHover={{ scale: 1.2 }}
        >
          <h1>About</h1>
        </motion.div>
        <Container>
          <p>
            A little text about me and what I do theres nothing to see here this
            is more of a placeholder just so you have something to fill out the
            void that is this page
          </p>
        </Container>
        <motion.div
          initial={{ borderRadius: 10 }}
          whileHover={{ borderRadius: 20 }}
        ></motion.div>
      </Flex>
    </section>
  );
};

export default About;
