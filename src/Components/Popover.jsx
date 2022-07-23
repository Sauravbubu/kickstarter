import React ,{useContext} from 'react'
import { AuthContext } from "../Context/Authcontext";

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal,
    Text
  } from '@chakra-ui/react'
  import {SettingsIcon} from '@chakra-ui/icons'
const PopHover = () => {
    const { user,Logout } = useContext(AuthContext);
    // console.log(user.metadata.lastSignInTime);
  return (
   
    <Popover>
  <PopoverTrigger>
    <Button variant={"none"}><SettingsIcon/></Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>{user.displayName}</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <Text>Email:{user.email}</Text>
        <Button colorScheme='blue' size={"sm"} onClick={()=>{Logout()}}>Logout</Button>
      </PopoverBody>
      <PopoverFooter> Login Date{user?.metadata?.lastSignInTime}</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
  )
}

export default PopHover