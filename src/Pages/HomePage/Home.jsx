import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import LiveCounter from "../../Components/LiveCounter";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  const bgimage = "https://i.imgur.com/2uMdJvK.png";
  return (
    <div>
      <Navbar />

      <Box
        style={{
          backgroundImage: "url(https://i.imgur.com/2uMdJvK.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          justifyContent: "center",
          alignContent: "center",
          backgroundRepeat: "no-repeat",

          zIndex: "-1",
          width: "100%",
          height: "400px",
          padding: "70px",
          margin: "auto",
        }}
        bgGradient="radial(gray.300, yellow.400, pink.200)"
        w="100%"
      >
       
<Text  fontSize="4xl"  textAlign="center" pb="2rem">Bring a creative project to life</Text>
<Text fontSize="m"  textAlign="center"> ON KICKSTARTER:</Text>
<LiveCounter/>
      </Box>
    </div>
  );
};

export default Home;
