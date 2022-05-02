/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';
import { css } from "styled-components/macro"; //eslint-disable-line
import useAnimatedNavToggler from "../helpers/useAnimatedNavToggler.js";
import logo from "./../../images/writer.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Navbar = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300 text-gray-800
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-blue-400
`;

export const NavLinkBut = tw.button`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300 text-gray-800
  pb-1 border-b-2 border-transparent 
`;


export const PrimaryLink = tw(NavLinkBut)`
  lg:mx-0
  px-8 py-3 rounded bg-blue-400 text-gray-100
  hocus:bg-blue-500 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 border-0 bg-transparent focus:outline-none hocus:text-blue-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border-0 text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center pt-2 pb-2
`;

export default ({ roundedHeaderButton = true, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const { currentUser, SignOut } = useAuth();
  const history = useHistory();

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      <span style={{ "fontFamily": "Dancing Script" }}>Writers Hub</span>
    </LogoLink>
  );
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/blogs">Blogs</NavLink>
      <NavLink href="/shayaris">Shayaris</NavLink>
      <NavLink href="/quotes">Quotes</NavLink>
      <NavLink href="/kavitas">Kavitas</NavLink>
      <NavLink href="/about">About Us</NavLink>
      <NavLink href="/contact">Contact Us</NavLink>
      {currentUser && currentUser.username ? (
        <>
          <PrimaryLink
            onClick={() =>
              history.push(`/users/${currentUser.username}`)
            }
            css={roundedHeaderButton && tw`rounded-full mr-1`}
            href="/"> {currentUser.username}</PrimaryLink>
          <PrimaryLink
            onClick={() => {
              SignOut();
              history.push('/login');
            }}
            css={roundedHeaderButton && tw`bg-red-400 hocus:bg-red-500 focus:outline-none rounded-full`}
            href="/">Sign Out</PrimaryLink>
        </>
      ) : <>
        <PrimaryLink
          onClick={() => {
            history.push('/login');
          }}
          css={roundedHeaderButton && tw` rounded-full`}
          href="/">Sign in</PrimaryLink>
      </>}
    </NavLinks>
  ];

  logoLink = logoLink || defaultLogoLink;

  links = links || defaultLinks;

  return (
    <Navbar className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Navbar>
  );
};


const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
