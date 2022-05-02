/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { PrimaryButton as PrimaryButtonBase } from "./../misc/Buttons.js"
// import CustomersLogoStripImage from "./../../images/customers-logo-strip.png";
import Lottie from 'react-lottie';
import animationData from './../../lottie/blog';
import animationData2 from './../../lottie/blob1';
import "./Carausal.css";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 outline-none border-none inline-block w-56 tracking-wide text-center py-5`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;


const buttonStyle = tw`rounded-full`;
const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animationData2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};



export default ({ roundedHeaderButton }) => {
  return (
    <>
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Writershubs <span tw="text-blue-400">for you.</span>
            </Heading>
            <Paragraph>
              Read amazing blogs ,shayaris , quotes and kavitas by writershub...
            </Paragraph>
            <PrimaryButton style={buttonStyle}>Lets Read</PrimaryButton>
            <CustomersLogoStrip>
              <p>Powered by <a target="_blank" href="https://vocalslocal.com/" rel="noreferrer">VOCALSLOCAL</a></p>
              {/* <img src={CustomersLogoStripImage} alt="Our Customers" /> */}
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <Lottie
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                options={defaultOptions}
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <div className="lottieStyle">
          <Lottie
            options={defaultOptions2}
          />
        </div>

      </Container>
    </>
  );
};
