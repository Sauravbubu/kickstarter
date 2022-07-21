import React from 'react'

const slidercard = () => {
  return (
    <>
    {data.map((e,i)=>  <Flex h="30%" key={i} flexDirection="column"  gap="1rem" w="100%">
<Image src={e.image} w="30%"  h="100% " />
<Flex flexDirection="column" gap=".2rem">
<Text> {e.pname}</Text>
<Text>415% FUNDED</Text>
<Text> {e.author}</Text>
<Flex gap="1rem"><BsBookmarkFill color="red.300"/><BiLike/><BiDislike/>  </Flex>


</Flex>
</Flex>)}
</>
  )
}

export default slidercard