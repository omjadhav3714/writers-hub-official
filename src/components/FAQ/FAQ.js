/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { SectionDescription } from "./../misc/Typography.js";
import { Container, ContentWithPaddingXl } from "./../misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "./../../images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "./../../images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
    subheading = "FAQS",
    heading = "You have Questions ?",
    description = "And we have got answers to all of them. Here are some frequently asked questions",
    faqs = [
        {
            question: "What is writershub ?",
            answer:
                "The WRITERS-HUB is found to give end user a trusted and verified platform to add their own written content which can be a blog ,shayari,  kavita, quote, joke, etc. Also the majority content ofthe writers-hub will be originally deleivered by themselves.The main motive of the writers-hub is to provide clean and be"
        },
        {
            question: "What is main motive of writershub ?",
            answer:
                " Our main motive is to connect the reader emotionally, Understand his/her feelings and let them relate with us. Our Shayaris are really heart-touching and our quotes are much more motivational as they are from personal experience Check the content to get more idea"
        },
        {
            question: "Is writers hub clean and safe ?",
            answer:
                "Yes definitely writers hub is clean as continuous content verification is done. Also two factor admin is done for content and users"
        },
        {
            question: "What is vocalslocal ?",
            answer:
                "Vocalslocal is founded to address a growing problem that technology helped to create: how to succeed your business in a world where the competition in the market are constantly increasing. Vocalslocal is a Service-hub where one can add their services and end-users can take benefits of those services.."
        }
    ]
}) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    return (
        <Container>
            <ContentWithPaddingXl>
                <Column>
                    <HeaderContent>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        {description && <Description>{description}</Description>}
                    </HeaderContent>
                    <FAQSContainer>
                        {faqs.map((faq, index) => (
                            <FAQ
                                key={index}
                                onClick={() => {
                                    toggleQuestion(index);
                                }}
                                className="group"
                            >
                                <Question>
                                    <QuestionText>{faq.question}</QuestionText>
                                    <QuestionToggleIcon
                                        variants={{
                                            collapsed: { rotate: 0 },
                                            open: { rotate: -180 }
                                        }}
                                        initial="collapsed"
                                        animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                        transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <ChevronDownIcon />
                                    </QuestionToggleIcon>
                                </Question>
                                <Answer
                                    variants={{
                                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                                    }}
                                    initial="collapsed"
                                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    {faq.answer}
                                </Answer>
                            </FAQ>
                        ))}
                    </FAQSContainer>
                </Column>
            </ContentWithPaddingXl>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
        </Container>
    );
};
