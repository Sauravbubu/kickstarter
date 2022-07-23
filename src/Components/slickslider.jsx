import React from "react";
import Slider from "react-slick";
import { data } from "../data";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { BiLike } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { BiDislike } from "react-icons/bi";
import  { Component } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button>Previous</button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button>Next</button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <BsFillArrowLeftCircleFill />,
  nextArrow: <BsFillArrowRightCircleFill />,
};





export default class Responsive extends Component {
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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
        {data.map((e, i) => (
            <Flex
              
              key={i}
              justifyContent="space-between"
              flexDirection="column"
              ml="1rem"
              mb="3rem"
              p="1rem"
              mt="3rem"
              gap="2rem"
              w="100%"
              h="100%"
            >
              <Image src={e.image} w="100%" h="90% " mb="1rem"/>
              <Flex flexDirection="column" gap=".5rem">
                <Text> {e.pname}</Text>
                <Text>415% FUNDED</Text>
                <Text> {e.author}</Text>
                <Flex gap="1rem">
                  <BsBookmarkFill color="red.300" />
                  <BiLike />
                  <BiDislike />{" "}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </div>
    );
  }
}
