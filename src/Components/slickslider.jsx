import React, { Component } from "react";
import Slider from "react-slick";
import { data } from "../data";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BiLike } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { BiDislike } from "react-icons/bi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
export default class Responsive extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box p="2rem">
        <h2> Suggested Project </h2>
        <Slider {...settings}>
          {data.map((e, i) => (
            <Flex
              boxShadow="base"
        
              h="400px"
              justifyContent="space-evenly"
              key={i}
              flexDirection="column"
              p="1rem"
              gap="1rem"
              w="100%"
            >
              <Image src={e.image} w="100%" h="50% " />
              <Flex flexDirection="column" gap=".5rem" mt="2rem">
                <Text> {e.pname}</Text>
                <Text>415% FUNDED</Text>
                <Text> by: {e.author}</Text>
                <Flex gap="1rem">
                  <BsBookmarkFill color="red.300" />
                  <BiLike />
                  <BiDislike />{" "}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Slider>
        {/* <div style={{ textAlign: "center" ,marginTop:"2rem"}}>
          <button className="button" onClick={this.previous} >Left</button>
            
        
          <button className="button" onClick={this.next} >
            Right
          </button> 
          </div> */}
      </Box>
    );
  }
}
