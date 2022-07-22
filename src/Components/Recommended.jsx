import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { data } from '../data'
import {BiLike} from 'react-icons/bi'
import {BsBookmarkFill} from 'react-icons/bs'
import {BiDislike} from 'react-icons/bi'
const Recommended = () => {
let arr=[...data]
arr.splice(3,35)
console.log(data);
  return (
    <Box h="400px"  w={[400,500,700]}>
    <Text fontSize="10px">RECOMMENDED POST</Text>
      <Box w="100%"  h="100%" gap="1rem" display='flex' flexDirection="column">
{arr.map((e,i)=> <Flex key ={i} h="30%"  gap="1rem" w="100%">
<Image src={e.image} w="30%"  h="100% " />
<Flex flexDirection="column" gap=".2rem">
<Text> {e.pname}</Text>
<Text>415% FUNDED</Text>
<Text> {e.author}</Text>
<Flex gap="1rem"><BsBookmarkFill color="red.300"/><BiLike/><BiDislike/>  </Flex>


</Flex>
</Flex>)}





      </Box>
    </Box>
  )
}

export default Recommended