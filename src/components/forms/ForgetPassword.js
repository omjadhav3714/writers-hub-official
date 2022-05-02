import React, { useRef, useState } from 'react';
import { auth } from '../../firebase';
import AnimationRevealPage from "./../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "./../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "./../../images/writer.png";
import { ReactComponent as FPIcon } from "feather-icons/dist/icons/lock.svg";
import Lottie from 'react-lottie';
import animationData from './../../lottie/forgot';


const ForgetPassword = () => {

  const Container = tw(ContainerBase)`min-h-screen min-w-full bg-white text-white font-medium flex justify-center -m-8`;
  const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
  const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
  const LogoLink = tw.a``;
  const LogoImage = tw.img`h-12 mx-auto`;
  const MainContent = tw.div`mt-8 flex flex-col items-center`;
  const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
  const FormContainer = tw.div`w-full flex-1 mt-8`;
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

  const emailRef = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const resetpassword = async () => {
    try {
      await auth.sendPasswordResetEmail(emailRef.current.value);
      setSuccess(true);
      setError(false);
    } catch (error) {
      setSuccess(false);
      setError(true);
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
      <div class='form-group'>
        <span>
          {success && (
            <div class='alert alert-success' role='alert'>
              Please Check your email!
            </div>
          )}
          {error && (
            <div class='alert alert-danger' role='alert'>
              something went wrong!
            </div>
          )}
        </span>
        <AnimationRevealPage>
          <Container>
            <Content>
              <MainContainer>
                <LogoLink href={logo}>
                  <LogoImage src={logo} />
                </LogoLink>
                <MainContent>
                  <Heading>Reset Password</Heading>
                  <FormContainer>
                    <Input
                      ref={emailRef}
                      type="email"
                      required
                      placeholder="Email" />
                    <SubmitButton type="submit" onClick={resetpassword}>
                      <FPIcon className="icon" />
                      <span className="text">Reset Password</span>
                    </SubmitButton>

                    <p tw="mt-8 text-sm text-gray-600 text-center">
                      We won't share your email !{" "}

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
    </div>
  );
};

export default ForgetPassword;
