import React, { useRef, useEffect } from "react";
import { Box, Center, Flex } from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
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
        <motion.div
          initial={{ backgroundColor: "white", borderRadius: 0 }}
          animate={{}}
        >
          <h1>hej</h1>
        </motion.div>
      </Flex>
    </section>
  );
};

export default About;
