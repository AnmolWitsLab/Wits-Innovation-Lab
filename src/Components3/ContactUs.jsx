import React from "react";
import {
  Div8,
  ContactBg,
  ContactBgImg,
  Got,
  Contact,
  Pera9,
  Input,
  Left,
  CircleImg,
  Circle,
  Project,
  WrapRight,
  Right,
  Inter,
  Select,
  Field,
  Add,
  Icon,
  SpanAdd,
  Optional,
  SendBtn,
  Send,
  LineSection,
  Line1,
  Or,
  Line2,
  LDesc,
  LineDesc,
  WholeSection,
  WhatSection,
  WhatsApp,
  What,
  CalSection,
  Calendly,
  Cal,
  Input2,
  Option,
} from "./ContactUsStyle";

function ContactUs() {
  return (
    <Div8>
      <ContactBg>
        <ContactBgImg src="./images/contact-bg.png" alt="contact-bg" />
      </ContactBg>
      <Got>Got an idea?</Got>
      <Contact>Contact Us</Contact>
      <Pera9>You have questions. We have answers.</Pera9>
      <Input>
        <Left>
          <CircleImg src="./images/mask.png" alt="mask" />
          <Circle src="./images/circle.png" alt="circle" />
          <Project>Have a Project? We would love to help</Project>
        </Left>
        <WrapRight>
          <Right>
            <Inter>I’m interested in....</Inter>
            <Select>
              <Option>All Services</Option>
            </Select>
            <Field>
              <Input2 type="text" placeholder="Your name"></Input2>
              <Input2 type="email" placeholder="Your email"></Input2>
              <Input2
                type="text"
                placeholder="Tell us about your project"
              ></Input2>
            </Field>
            <Add>
              <Icon src="./images/icon.png" alt="icon" />
              <SpanAdd>Add Attachment</SpanAdd>
              <Optional>(Optional)</Optional>
            </Add>
            <SendBtn>
              <Send>Send Request</Send>
            </SendBtn>
            <LineSection>
              <Line1></Line1>
              <Or>or</Or>
              <Line2></Line2>
            </LineSection>
            <LDesc>
              <LineDesc>
                If you're ready to make a change, we're ready to help. Just
                connect with us today!
              </LineDesc>
            </LDesc>
            <WholeSection>
              <WhatSection>
                <WhatsApp src="./images/whatsapp.png" alt="whatsapp" />
                <What>Whatsapp</What>
              </WhatSection>
              <CalSection>
                <Calendly src="./images/calendly.png" alt="calendly" />
                <Cal>Calendly</Cal>
              </CalSection>
            </WholeSection>
          </Right>
        </WrapRight>
      </Input>
    </Div8>
  );
}

export default ContactUs;
