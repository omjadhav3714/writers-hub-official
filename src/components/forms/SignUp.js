/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "./../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "./../../images/writer.png";
import googleIconImageSrc from "./../../images/google-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/user-plus.svg";
import Lottie from 'react-lottie';
import animationData from './../../lottie/register';

const SignUp = () => {
  const Container = tw(ContainerBase)`min-h-screen min-w-full bg-white text-white font-medium flex justify-center -m-8`;
  const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
  const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
  const LogoLink = tw.a``;
  const LogoImage = tw.img`h-12 mx-auto`;
  const MainContent = tw.div`mt-8 flex flex-col items-center`;
  const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
  const FormContainer = tw.div`w-full flex-1 mt-8`;

  const SocialButtonsContainer = tw.div`flex flex-col items-center`;
  const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

  const DividerTextContainer = tw.div`my-8 border-b text-center relative`;
  const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

  const Form = tw.form`mx-auto max-w-xs pt-12`;
  const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
  const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide border-none font-semibold bg-blue-400 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out flex items-center justify-center`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
  const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;



  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { SignUp } = useAuth();
  const { currentUser } = useAuth();
  const history = useHistory();

  if (currentUser) {
    history.push('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(emailRef.current.value, passwordRef.current.value);
      await SignUp(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (error) {
      console.log(console.log(error.message));
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      <AnimationRevealPage>
        <Container>
          <Content>
            <MainContainer>
              <LogoLink href={logo}>
                <LogoImage src={logo} />
              </LogoLink>
              <MainContent>
                <Heading>Sign up to writershub</Heading>
                <FormContainer>
                  <SocialButtonsContainer>
                    <SocialButton href="/">
                      <span className="iconContainer">
                        <img src={googleIconImageSrc} className="icon" alt="" />
                      </span>
                      <span className="text">Sign in with Google</span>
                    </SocialButton>

                  </SocialButtonsContainer>
                  <DividerTextContainer>
                    <DividerText>Or Sign up with your e-mail</DividerText>
                  </DividerTextContainer>
                  <Form onSubmit={handleSubmit}>
                    <Input
                      ref={usernameRef}
                      type="text"
                      required
                      placeholder="Name" />
                    <Input
                      ref={emailRef}
                      type="email"
                      required
                      placeholder="Email" />
                    <Input
                      ref={passwordRef}
                      type="password"
                      required
                      placeholder="Password" />
                    <SubmitButton type="submit">
                      <LoginIcon className="icon" />
                      <span className="text">Sign Up</span>
                    </SubmitButton>
                  </Form>

                  <p tw="mt-8 text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <a href="/login" tw="border-b border-gray-500">
                      Sign in
                    </a>
                  </p>
                </FormContainer>
              </MainContent>
            </MainContainer>
            <IllustrationContainer>
              <Lottie
                tw="m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat"
                options={defaultOptions}
              />
            </IllustrationContainer>
          </Content>
        </Container>
      </AnimationRevealPage>
    </div>
  );
};

export default SignUp;
