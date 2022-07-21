import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
const Featuredpost = () => {
  return (
    <Box h="400px"  w={[400,500,700]}>
    <Text fontSize="10px">FEATURED POST</Text>
      <Image
        h="100%"
        w="100%"
        src="https://ksr-ugc.imgix.net/assets/037/247/334/d0d6c8d73d9cd3d536b1ac01f6e35b9a_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1652127745&auto=format&frame=1&q=92&s=c3cd577834ea78f7b82bf41c44f09a1a"
      />
    </Box>
  );
};

export default Featuredpost;
