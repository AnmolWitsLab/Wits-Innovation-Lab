import React from "react";
import {
  LastSection,
  FooterLeft,
  FooterL,
  FooterLo,
  FooterLogo,
  FooterText,
  Text,
  FooterLeftDiv,
  AboutUs,
  Au,
  AboutDrop,
  General,
  Gn,
  BlankDiv,
  Drop,
  GeneralDrop,
  Cont,
  Co,
  EmptyDiv,
  CoDrop,
  ContactUsDrop,
  ContDiv,
  FooterRight,
  FooterR,
  FollowUsR,
  FooterIcon,
  Icons,
  Sub,
  Subs,
  InputDiv,
  EmailLogo,
  Email,
  Subscribe,
  WhiteSection,
  LeftDiv,
  AllSame,
  RightDiv,
  AllDiv,
  LeftImage,
  LeftImg,
  RightImage,
  RightImg,
} from "./FooterStyle";

function Footer() {
  return (
    <AllDiv>
      <LeftImage>
        <LeftImg src="./images/left-img.png" alt="left-img" />
      </LeftImage>
      <RightImage>
        <RightImg src="./images/right-img.png" alt="right-img" />
      </RightImage>
      <LastSection>
        <FooterLeft>
          <FooterL>
            <FooterLo>
              <FooterLogo
                src="./images/wits-footer-logo.png"
                alt="wits-footer-logo"
              />
            </FooterLo>
            <FooterText>
              <Text>
                Wits Innovation Lab is where creativity and innovation flourish.
                We provide the tools you need to come up with innovative
                solutions for today's businesses, big or small.
              </Text>
            </FooterText>
          </FooterL>
          <FooterLeftDiv>
            <AboutUs>
              <Au>About Us</Au>
              <AboutDrop>Services</AboutDrop>
              <AboutDrop>Case Studies</AboutDrop>
              <AboutDrop>Our Process</AboutDrop>
              <AboutDrop>Industries</AboutDrop>
            </AboutUs>
            <General>
              <Gn>General</Gn>
              <BlankDiv></BlankDiv>
              <Drop>
                <GeneralDrop>Company</GeneralDrop>
                <GeneralDrop>Career</GeneralDrop>
                <GeneralDrop>Blogs</GeneralDrop>
                <GeneralDrop>Contact Us</GeneralDrop>
              </Drop>
            </General>
            <Cont>
              <Co>Contact Us</Co>
              <EmptyDiv></EmptyDiv>
              <CoDrop>
                <ContactUsDrop>SCO 40-41 D, 3rd floor,</ContactUsDrop>
                <ContactUsDrop>City Heart, Kharar, Punjab-140301</ContactUsDrop>
                <ContDiv>
                  <ContactUsDrop>Unit 37 Tileyard Road, N7 9AH</ContactUsDrop>
                  <ContactUsDrop>California, United States</ContactUsDrop>
                </ContDiv>
              </CoDrop>
            </Cont>
          </FooterLeftDiv>
        </FooterLeft>
        <FooterRight>
          <FooterR>
            <FollowUsR>Follow Us</FollowUsR>
            <FooterIcon>
              <Icons src="./images/linkedin.svg" alt="linkedin" />
              <Icons src="./images/fb.svg" alt="fb" />
              <Icons src="./images/twitter.svg" alt="twitter" />
              <Icons src="./images/youtube.svg" alt="youtube" />
            </FooterIcon>
          </FooterR>
          <Sub>
            <Subs>Subscribe to Our Newsletter</Subs>
          </Sub>
          <InputDiv>
            <EmailLogo src="./images/mail.svg" alt="mail" />
            <Email type="text" placeholder="Enter Your Email" />
            <Subscribe>Subscribe</Subscribe>
          </InputDiv>
        </FooterRight>
      </LastSection>
      <WhiteSection>
        <LeftDiv>
          <AllSame>Terms & Conditions</AllSame>
          <AllSame>Privacy Policy</AllSame>
          <AllSame>Legal</AllSame>
        </LeftDiv>
        <RightDiv>
          <AllSame>
            Copyright © 2020. witsinnovationlab. All rights reserved.
          </AllSame>
        </RightDiv>
      </WhiteSection>
    </AllDiv>
  );
}

export default Footer;
