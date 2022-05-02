/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "./misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "./../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "./../images/quotes-r.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "./../images/svg-decorator-blob-4.svg";
import noprofile from './../images/noprofile.gif';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-4/12 rounded flex items-center max-w-xs md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-6/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`;
const CustomerInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`;
const CustomerName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-sm`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;



const DecoratorBlob1 = tw(
    SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;

export default ({ values }) => {
    return (
        <Container>
            {values.map((data) => (
                <Content>
                    <HeadingInfoContainer>
                        <HeadingTitle>{`Welcome to ${data.username}'s Profile`}</HeadingTitle>
                        <HeadingDescription></HeadingDescription>
                    </HeadingInfoContainer>

                    <Testimonial>
                        <ImageContainer>
                            <img src={data.image || noprofile} />
                        </ImageContainer>
                        <TextContainer>
                            <QuoteContainer>
                                <QuotesLeft />
                                <Quote>{data.description || "No Description"}</Quote>
                                <QuotesRight />
                            </QuoteContainer>
                            <CustomerInfo>
                                <CustomerName>{data.username || "No Description"}</CustomerName>
                                <CustomerTitle>{data.email || "No email"}</CustomerTitle>
                            </CustomerInfo>
                        </TextContainer>
                    </Testimonial>

                </Content>
            ))}
            <DecoratorBlob1 />
        </Container>
    );
};
