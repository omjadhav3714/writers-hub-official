/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-whitespace-before-property */
import React, { useState } from 'react';
import { db } from './../../firebase';
import Navbar from '../Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./../misc/Buttons.js";
import Lottie from 'react-lottie';
import animationData from './../../lottie/contact';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-blue-400`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
// const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 outline-none py-3 font-medium transition duration-300`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`mt-8 border-none outline-none rounded ml-2`

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setmessage] = useState("");


  const handlesubmit = async () => {

    try {
      const result = Math.random().toString(36).substring(2, 17);
      await db.collection("ContactUs").doc(result).set({
        id: result,
        name: name,
        email: email,
        message: message,
        phone: phone,
        date: Date(),

      }).then(() => {
        alert("Message sent successully");
        window.location.reload();
      })
    } catch (err) {
      console.error(err);
      alert("Message sent Failed");
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
    <>
      <Navbar />
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Lottie
              options={defaultOptions}
            />
          </ImageColumn>
          <TextColumn textOnLeft={true}>
            <TextContent>
              {<Subheading>Contact Us</Subheading>}
              <Heading>Feel free to <span tw="text-blue-500">get in touch</span><wbr /> with us.</Heading>
              {/* <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description> */}
              <Form onSubmit={handlesubmit}>

                <Input
                  style={{ "borderTop": "1px", "borderRight": "1px", "borderLeft": "1px" }}
                  type="text"
                  className='form-control'
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required />
                <Input
                  style={{ "borderTop": "1px", "borderRight": "1px", "borderLeft": "1px" }}
                  type="email"
                  className='form-control'
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <Input
                  style={{ "borderTop": "1px", "borderRight": "1px", "borderLeft": "1px" }}
                  type="number"
                  className='form-control'
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Textarea
                  style={{ "borderTop": "1px", "borderRight": "1px", "borderLeft": "1px", "border-bottom": "1px solid #9ca3af" }}
                  placeholder="Your Message Here"
                  className='form-control'
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  required
                />
                <SubmitButton style={{ "width": "25%" }} type="submit">Send</SubmitButton>
              </Form>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;