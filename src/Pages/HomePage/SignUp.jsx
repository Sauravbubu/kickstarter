import React, { Component }  from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { UserAuth } from '../../Context/Authcontext';

// import { Authcontext } from '../Components/context/AuthContext';

export default function Signup() {
const {handleLogin}=UserAuth()
  const handleGsignin=async ()=>{
    console.log(1);
try {
 await handleLogin()
} catch (error) {
  console.log(error);
}
  }
  
  return (
    <>
    
    <Flex
    _before={{
                   
                    content: '""',
                
                    width: '100%',
                    height: '100%',
                   
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex:0,
                    top: 0,
                    left: 0,
                  }}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} zIndex="10">
      
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color="white"> Sign Up </Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          w="500px"
          p={8}>
          <Stack spacing={4} >
          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                {/* <Link color={'blue.400'}>Forgot password?</Link> */}
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                
                Sign Up
              </Button>

              <Text>ALready have an account ? <Link to="/login">Sign In</Link></Text>
            </Stack>
          </Stack>
          
        </Box>
        
      </Stack>
    </Flex>
    </>
  );
}