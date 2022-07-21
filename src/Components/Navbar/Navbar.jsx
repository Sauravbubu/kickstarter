import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Flex, Image,Text} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Navbar = () => {
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
    <Flex p="2rem" justifyContent="space-between" boxShadow='base' borderColor='gray.100' alignItems="center" >
    <Flex gap="1rem">
<Text>      
  <Link to='/' color='teal.800' href='#'>Discover</Link></Text>
        <Link to='/'  color='teal.800' href='#'>Start a Project</Link>

    </Flex>
    <Image ml="-30px" h="20px"  src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f" alt="Kickstarter"/>
    <Link to="/login"><Button>Login</Button></Link>
    </Flex>

    <Tabs align='center'>
  <TabList p="1rem">
  {tabs.map((t,i)=><Tab key={i}>{t}</Tab>)}
    
    
  </TabList>
</Tabs>

    </>
  )
}

export default Navbar