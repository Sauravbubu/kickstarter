import { Flex, Grid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const LiveCounter = () => {
  const [funded, setfunded] = useState(223702);
  const [money, setmoney] = useState(45);
  
  useEffect(() => {
  const timer = setTimeout(() => {
    // console.log('This will run after 1 second!')
    setfunded(funded+Math.floor((Math.random() * 100) + 1))
    setmoney(money+Math.floor((Math.random() * 10) + 1))
  }, 2000);
  return () => clearTimeout(timer);
}, [funded]);
  return (
    
    <Grid
    templateColumns="repeat(3, 1fr)"
    gridColumn=" 1fr 1fr 1fr"
    zIndex="10"
    ml="1rem"
    mt="1rem"
    justifyContent="space-between"
    boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"

    h="120px"
  >
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      boxShadow="xl"
    >
      <Text fontSize={["10px","15px","25px"]} color="teal.700">
        {funded}
      </Text>
      <Text  fontSize={["5px","5px","25px"]}>Projects funded</Text>
    </Flex>
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      boxShadow="xl"
    >
      <Text  fontSize={["10px","15px","25px"]} color="teal.700">
        $6,156,519,{money}
      </Text>
      <Text fontSize={["5px","5px","25px"]}>Towards creative work</Text>
    </Flex>
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      boxShadow="xl"
    >
      <Text  fontSize={["10px","15px","25px"]} color="teal.700">
        68,747,346
      </Text>
      <Text fontSize={["5px","5px","25px"]}>Pledges</Text>
    </Flex>
  </Grid>
  )
}

export default LiveCounter