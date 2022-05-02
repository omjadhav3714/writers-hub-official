/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "./../misc/Layouts.js";
import { SectionHeading } from "./../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./../misc/Buttons.js";
import { ReactComponent as StarIcon } from "./../../images/star-icon.svg";
import "./Trending.css";
import Lottie from 'react-lottie';
import animationData from './../../lottie/blob3';
import animationData2 from './../../lottie/blob4';

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-blue-400! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`border-0 outline-none`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-blue-400`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

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

export default ({
    heading = "Trending & Feature Posts",
    tabs,
}) => {

    const tabsKeys = Object.keys(tabs);
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);

    return (
        <Container>
            <ContentWithPaddingXl>
                <HeaderRow>
                    <Header>{heading}</Header>
                    <TabsControl>
                        {Object.keys(tabs).map((tabName, index) => (
                            <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                                {tabName.toLocaleUpperCase()}
                            </TabControl>
                        ))}
                    </TabsControl>
                </HeaderRow>

                {tabsKeys.map((tabKey, index) => (
                    <TabContent
                        key={index}
                        variants={{
                            current: {
                                opacity: 1,
                                scale: 1,
                                display: "flex",
                            },
                            hidden: {
                                opacity: 0,
                                scale: 0.8,
                                display: "none",
                            }
                        }}
                        transition={{ duration: 0.4 }}
                        initial={activeTab === tabKey ? "current" : "hidden"}
                        animate={activeTab === tabKey ? "current" : "hidden"}
                    >
                        {tabs[tabKey].map((card, index) => (
                            <CardContainer key={index}>
                                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                                    <CardImageContainer>
                                        <CardText>
                                            <CardTitle>{card.title}</CardTitle>
                                            <CardContent>
                                                <Link style={{ "color": "#111827" }} to={`/${tabKey}/${card.authorName}/${card.id}`}>
                                                    <div dangerouslySetInnerHTML={{ __html: card.description.substring(0, 100) + ".........more" }}>
                                                    </div>
                                                </Link>
                                            </CardContent>
                                            <CardPrice>{card.price}</CardPrice>
                                        </CardText>
                                        <CardRatingContainer>
                                            <CardRating>
                                                <StarIcon />
                                                FEATURED
                                            </CardRating>
                                        </CardRatingContainer>
                                        <CardHoverOverlay
                                            variants={{
                                                hover: {
                                                    opacity: 1,
                                                    height: "auto"
                                                },
                                                rest: {
                                                    opacity: 0,
                                                    height: 0
                                                }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <CardButton><Link style={{ "color": "#fff" }} to={`/${tabKey}/${card.authorName}/${card.id}`}> Read more</Link></CardButton>
                                        </CardHoverOverlay>
                                    </CardImageContainer>
                                    <CardText>
                                        <CardTitle><Link to={`/user/${card.userId}`}>{card.authorName}</Link></CardTitle>
                                        <CardPrice>{card.price}</CardPrice>
                                    </CardText>
                                </Card>
                            </CardContainer>
                        ))}
                    </TabContent>
                ))}
            </ContentWithPaddingXl>
            <div className="lottieContentBlobTrend">
                <Lottie
                    options={defaultOptions2}
                />
            </div>
            <div className="lottieStyleTrend">
                <Lottie
                    options={defaultOptions}
                />
            </div>
        </Container>
    );
};
