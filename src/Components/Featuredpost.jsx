import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import {data} from '../data'
const Featuredpost = () => {


  let obj=data[Math.floor( Math.random()*8)]
  console.log(obj);
  return (
      <Box h="400px"  w={[400,500,700]}>
    <Text fontSize="10px">FEATURED POST</Text>
      <Image
        h="100%"
        w="100%"
src={obj.image}


      />
    </Box>




  );
};

export default Featuredpost;
