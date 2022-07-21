import React from 'react'
import Login from './Login'
import Home from './HomePage/Home'
import {Routes,Route} from 'react-router-dom'
const AllRoute = () => {
  return (
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>


    </Routes>
  )
}

export default AllRoute