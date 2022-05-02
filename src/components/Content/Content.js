/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { SectionDescription } from "./../misc/Typography.js";

import defaultCardImage from "./../../images/shield-icon.svg";
import SupportIconImage from "./../../images/support-icon.svg";
import ShieldIconImage from "./../../images/shield-icon.svg";
import CustomizeIconImage from "./../../images/customize-icon.svg";
import FastIconImage from "./../../images/fast-icon.svg";
import ReliableIconImage from "./../../images/reliable-icon.svg";
import SimpleIconImage from "./../../images/simple-icon.svg";
import Lottie from 'react-lottie';
import animationData2 from './../../lottie/blob2';
import "./Content.css";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;


const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Content = ({ cards = null, heading = "Amazing Features", subheading = "Features",
  description = "Lets see some amazing features of writershubs" }) => {

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Verification",
      description: "We strictly verify the content to provide top notch content."
    },
    { imageSrc: SupportIconImage, title: "Blogs", description: "Read the really informative and amazing blogs by top notch writers" },
    { imageSrc: CustomizeIconImage, title: "Shayaris", description: "Really heart touching shayaris original and exclusive by writershub" },
    { imageSrc: ReliableIconImage, title: "Kavitas", description: "Relatable and real situation/story based poems" },
    { imageSrc: FastIconImage, title: "Quotes", description: "Search for daily relatable and motivational quotes" },
    { imageSrc: SimpleIconImage, title: "Users", description: "Verified and top notch exclusive writers for writershub" }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <div className="lottieContentBlob">
        <Lottie
          options={defaultOptions2}
        />
      </div>
    </Container>
  );
};

export default Content;
