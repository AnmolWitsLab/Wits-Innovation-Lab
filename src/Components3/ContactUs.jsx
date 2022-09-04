import React from "react";
import {
  Div8,
  Got,
  Contact,
  Pera9,
  Input,
  Left,
  CircleImg,
  Project,
  Right,
  Inter,
  Select,
  Field,
  Input2,
  Option,
} from "./ContactUsStyle";

function ContactUs() {
  return (
    <Div8>
      <Got>Got an idea?</Got>
      <Contact>Contact Us</Contact>
      <Pera9>You have questions. We have answers.</Pera9>
      <Input>
        <Left>
          <CircleImg src="./images/mask.png" alt="mask" />
          <Project>Have a Project? We would love to help</Project>
        </Left>
        <Right>
          <Inter>I’m interested in....</Inter>
          <Select>
            <Option>All Services</Option>
          </Select>
          <Field>
            <Input2 type="text" placeholder="Your name"></Input2>
            <Input2 type="text" placeholder="Your email"></Input2>
            <Input2
              type="text"
              placeholder="Tell us about your project"
            ></Input2>
          </Field>
        </Right>
      </Input>
    </Div8>
  );
}

export default ContactUs;
