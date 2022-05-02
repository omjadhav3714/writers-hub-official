/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "./../misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ArrowLeftIcon } from "./../../images/arrow-left-3-icon.svg"
import { ReactComponent as ArrowRightIcon } from "./../../images/arrow-right-3-icon.svg"
import shweta from './../../images/shweta.jpg';
import kavade from './../../images/kavade.jpg';
import maya from './../../images/maya.jpg';

import "slick-carousel/slick/slick.css";

const PrimaryBackgroundContainer = tw(Container)`bg-blue-400 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img`w-16 h-16 rounded-full`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 border-0 bg-transparent hover:text-blue-400 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
    subheading = "",
    heading = "Testimonials",
    description = "Here are some testimonial for the writershub",
    testimonials = [
        {
            customerName: "Shweta Pachpute",
            customerProfile: "Computer Engineer",
            imageSrc: shweta,
            quote:
                "I have been using writershub from launch. And in that time we have had no problem at all. The user interface is really simple to use. The content is really good and clean."
        },
        {
            customerName: "Sakshi Kavade",
            customerProfile: "Founder, Kavade Trust",
            imageSrc: kavade,
            quote:
                "I am delighted with the quality and clean content of the writers that writershub provides. The uptime is amazing and the utilization of time is great for which we are investing."
        },
        {
            customerName: "Prathamesh Mayekar",
            customerProfile: "CTO, BB pvt.",
            imageSrc: maya,
            quote:
                "It has been since launch I have started reading and it has nothing but an amazing experience. The content is really great and quality."
        }
    ]
}) => {
    const [sliderRef, setSliderRef] = useState(null)

    return (
        <PrimaryBackgroundContainer>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    <Heading>{heading}</Heading>
                    <Description>{description}</Description>
                </HeadingContainer>
                <TestimonialsSlider arrows={false} ref={setSliderRef}>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial key={index}>
                            <QuoteContainer>
                                <Quote>
                                    {testimonial.quote}
                                </Quote>
                            </QuoteContainer>
                            <CustomerInfoAndControlsContainer>
                                <CustomerImage src={testimonial.imageSrc} />
                                <CustomerNameAndProfileContainer>
                                    <CustomerName>
                                        {testimonial.customerName}
                                    </CustomerName>
                                    <CustomerProfile>
                                        {testimonial.customerProfile}
                                    </CustomerProfile>
                                </CustomerNameAndProfileContainer>
                                <ControlsContainer>
                                    <ControlButton onClick={sliderRef?.slickPrev}>
                                        <ArrowLeftIcon className="icon" />
                                    </ControlButton>
                                    <ControlButton>
                                        <ArrowRightIcon className="icon" onClick={sliderRef?.slickNext} />
                                    </ControlButton>
                                </ControlsContainer>
                            </CustomerInfoAndControlsContainer>
                        </Testimonial>
                    ))}
                </TestimonialsSlider>
            </ContentWithPaddingXl>
        </PrimaryBackgroundContainer>
    );
};
