import { Box, Flex, Grid, GridItem, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Banner = () => {
  return (
    <Grid p="2rem" templateColumns='repeat(5, 1fr)' gap={4} w="100%">
      <GridItem colSpan={3}>
        <Image
          src="https://ksr-ugc.imgix.net/assets/037/422/047/3ae61394be206ba81856c6dbeb9a07b3_original.png?ixlib=rb-4.0.2&w=700&fit=max&v=1653424670&gif-q=50&lossless=true&s=64c72cc5b0903a213e1cfd0352896c37"
        />
      </GridItem>

      <GridItem colSpan={2}>
        <Flex flexDir="column">
          <Text fontSize="4xl">
            <Link>Kickstarter’s 2021 Public Benefit Statemen</Link>
          </Text>
          <Text fontSize="m">
            Nearly 3.2 million people pledged more than $800 million to
            Kickstarter creators in 2021. Our latest annual Public Benefit
            Statement reports on how well we lived up to our commitments as a
            Public Benefit Corporation and fulfilled our mission to bring
            creative projects to life.
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Banner;
