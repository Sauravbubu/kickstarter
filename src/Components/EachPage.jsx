import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "./Banner";
import Featuredpost from "./Featuredpost";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Recommended from "./Recommended";
import CustomArrows from "./slickslider";

const EachPage = () => {
  const { page } = useParams();
  console.log(page);
  let [part1, part2] = page.split("&");
  return (
    <Box>
      <Navbar />
      <Box p="3rem" w="100%">
        <Box w="100%" pl="4rem" pr="4rem">
          <Text fontSize="4xl" fontFamily="times">
            {" "}
            {page}
          </Text>
          <Text fontSize="lg" fontFamily="sans-serif">
            {" "}
            Explore fantastical worlds and original characters from
            Kickstarter’s community of {page}
          </Text>
          <Flex color="green.400">
            <Text mr="2rem">
              <Link to={`/home/:page/${part1}`}>Explore {part1}</Link>{" "}
            </Text>
            <Text>
              <Link to={`/home/:page/${part2}`}>Explore {part2}</Link>
            </Text>
          </Flex>
        </Box>

        <Flex p="4rem" gap="1rem">
          <Featuredpost />
          <Recommended />
        </Flex>
        <CustomArrows />
        <Banner />

        <Footer />
      </Box>
    </Box>
  );
};

export default EachPage;
