import React, { Component }  from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { UserAuth } from '../Context/Authcontext';
import GoogleButton from 'react-google-button';
// import { Authcontext } from '../Components/context/AuthContext';

export default function Login() {
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
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
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
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                
                Sign in
              </Button>

              <Text>New to Kickstater <Link>Sign Up</Link></Text>
            </Stack>
          </Stack>
          
        </Box>
        <GoogleButton onClick={handleGsignin}/>
      </Stack>
    </Flex>
  );
}