import { Box, Flex, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiRepeat } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { Comics } from "../comics";

import Navbar from "./Navbar/Navbar";
import Slidercard from "./slidercard";

const Explore = () => {

  const { each } = useParams();
//   console.log(each);
const [data, setdata] = useState(Comics);
  function handleDateSort(e){
    
if(e.target.value =='New'){
    console.log(e.target.value);
    let temp=data.sort((a,b)=>a.dayago-b.dayago)
    setdata([...temp])
console.log(data);
}
else{
    console.log(e.target.value);
    let temp=data.sort((a,b)=>b.dayago-a.dayago)
setdata([...temp])
console.log(data);
}
  }
  useEffect(() => {
   console.log(1)
  },[data])


  return (
    <>
      {!(each === "Comics") ? (
        <>
        <Navbar/>
        <Flex w="80%" p={6} gap="4rem">

        <Flex>
       
        <select size={"lg"}  placeholder='Sort By Time'>
  <option value='ASEC'>Low to High</option>
  <option value='DESC'>High to Low</option>
  
</select>
</Flex>
<Flex>

<select  size={"lg"} onChange={handleDateSort} >
<option>Sort By Day Freshness</option>
  <option value='New'>Newsest</option>
  <option value='Old'>Oldest</option>
 
</select>
</Flex>
          </Flex>
          <Box
            display="grid"
            gridTemplateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]}
            w="100%"
            p="3rem"
            gridTemplateRows="auto"
            gap={6}
          >
          
            {data?.map((el, i) => (
              <Slidercard
                key={i}
                title={el.title}
                image={el.image}
                price={el.price}
                dayago={el.dayago}
                description={el.description}
                author={el.author}
                funded={el.funded}
              />
            ))}
          </Box>
        </>
      ) : (
        <h1>NO</h1>
      )}
    </>
  );
};

export default Explore;
