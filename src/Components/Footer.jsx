import { Flex, Link,Image, Stack, Text, Select } from '@chakra-ui/react'
import React from 'react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  const tabs=[
        "Arts",
       " Comics & Illustration",
       " Design & Tech",
        "Film",
       " Food & Craft",
      " Games",
        "Music",
        "Publishing"]   
  return (
    <>  
    <Flex w="100%" p="1rem" gap="1rem"  boxShadow="base" mt="2rem" color="gray.500">
{tabs.map((e,i)=>
<Text ml="2rem" key={i} >{e}</Text>
)}

</Flex>
      <Flex alignItems='center' gap="4rem"  p="3rem" w="100%" justifyContent="space-evenly" ml="4rem" mr="4rem">
    
    <Flex flexDir="column">
    <Text fontWeight="bold">ABOUT</Text>
      <Link>About us</Link>
      <Link>Our charter</Link>
      <Link>Stats</Link>
      <Link>Press</Link>
      <Link>Jobs</Link>
    </Flex>
    <Flex flexDir="column">
    <Text fontWeight="bold">SUPPORT</Text>
      <Link>Help Center</Link>
      <Link>Our Rules</Link>
      <Link>Creator Resources</Link>
      <Link>Forward Funds</Link>
      <Link>Brand asset</Link>
    </Flex>
    <Flex flexDir="column">
    <Text fontWeight="bold">MORE FROM KICKSTARTER</Text>
      <Link>Newsletters</Link>
      <Link>Kickstarter Magazine</Link>
      <Link>The Creative Independent</Link>
      <Link>The Kickstarter Blog</Link>
      <Link>Mobile apps</Link>
    </Flex>
    </Flex>






    <Flex justifyContent="space-between" p="2rem"  m="2rem" alignItems="center" boxShadow="base">
    <Text size={"sm"}>Kickstarter, PBC © 2022</Text>
    <Flex gap="4rem" justifyContent="space-evenly">
    <Stack direction={'row'} spacing={8}>


            <Link label={'Twitter'} href={'#'}>

              <FaTwitter />
            </Link>
            <Link label={'YouTube'} href={'#'}>
              <FaYoutube />
            </Link>
            <Link label={'Instagram'} href={'#'}>
              <FaInstagram />
            </Link>
          </Stack>

<Flex gap="2rem" >
<Select placeholder='Language' >
  <option value='option1'>English</option>
  <option value='option2'>Hindi</option>
  <option value='option3'>Chinese</option>
</Select>
<Select placeholder='Currency'>
  <option value='option1'>$USD</option>
  <option value='option2'>Rupee</option>
  <option value='option3'></option>
</Select>
</Flex>
</Flex>
          </Flex>
    </>

  )
}

export default Footer