import { Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'

const LiveCounter = () => {
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
      <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} color="teal.700">
        223,702
      </Text>
      <Text fontSize="m">projects funded</Text>
    </Flex>
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      boxShadow="xl"
    >
      <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} color="teal.700">
        $6,156,106,519
      </Text>
      <Text fontSize="m">towards creative work</Text>
    </Flex>
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      boxShadow="xl"
    >
      <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} color="teal.700">
        68,747,346
      </Text>
      <Text fontSize="m">ppledges</Text>
    </Flex>
  </Grid>
  )
}

export default LiveCounter