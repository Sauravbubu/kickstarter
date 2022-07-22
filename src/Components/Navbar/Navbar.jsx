import React, { useEffect, useState } from 'react'
import {NavLink,useSearchParams} from 'react-router-dom'
import {Button, Flex, Image, Link,Text} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
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
  <Link color='teal.800' href='#'>Discover</Link></Text>
        <Link color='teal.800' href='#'>Start a Project</Link>

    </Flex>
    <NavLink to="/home">
    <Image ml="-30px" h="20px"  src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f" alt="Kickstarter"/></NavLink>
    <Button><NavLink to="/login">
                Sign in
                </NavLink></Button>
    </Flex>

    <Tabs align='center'>
  <TabList p="1rem">
  {tabs.map((t,i)=>
    <NavLink  key={i} to={`/home/${t}`}><Tab>  {t} </Tab> </NavLink>
  )}

    
  </TabList>

{/* <TabPanels>
  {tabs.map((t,i)=>
  <TabPanel key={i}>{t}</TabPanel>
  )}
  </TabPanels> */}
</Tabs>

    </>
  )
}

export default Navbar