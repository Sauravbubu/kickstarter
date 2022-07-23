import React from "react";
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { Flex, Text, Image, Box } from "@chakra-ui/react";
const Slidercard = ({ title, image, author,dayago, description, funded ,price}) => {
  return (
    <>
      <Flex h="100%" flexDirection="column" gap="1rem" justifyContent="space-evenly" w="100%" p="1rem" boxShadow={"base"}>
        <Box>
          <Image src={image} w="100%" h="100% " />
        </Box>
        <Flex flexDirection="column" gap=".2rem">
          <Text fontSize={["m","xl","2xl"]}> {title}</Text>
          <Text fontWeight="bold">From:{price}</Text>
          <Text fontSize={["xs","s","m"]} style={{
  display:"inline-block",
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "130ch"}}>{description}</Text>
          <Text color={"green.600"}  fontWeight="bold" fontSize={"lg"}>Funded:{funded}</Text>
          <Text fontWeight={"bold"}>By: {author}</Text>
          <Flex gap="1rem">
            <BsBookmarkFill color="red.300" />
            <BiLike />
            <BiDislike />{" "}
          </Flex>
          <Text>{dayago} Days Ago</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Slidercard;
