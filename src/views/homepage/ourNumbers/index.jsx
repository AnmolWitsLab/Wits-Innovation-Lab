import React from "react";
import {
  Div4,
  Side,
  SideImg,
  Both,
  Head,
  Head2,
  OurHead,
  Community,
  Span2,
  Para2,
  Blank,
  Team,
  Cod,
  Code,
  C,
  Hr,
  Mem,
  Members,
  Pr,
  M,
  Hr2,
  Projects,
  Pro,
} from "styles/ourNumbers";
import sideImg from "assets/images/side-img.png";

function OurNumbers() {
  return (
    <Div4>
      <Side>
        <SideImg src={sideImg} alt="side-img" />
      </Side>
      <Both>
        <Head>Let us tell a story of</Head>
        <Head2>Our Numbers</Head2>
      </Both>
      <OurHead>
        <Community>
          <Span2>
            When You See Our Numbers, You'll Know Why We're The Best.
          </Span2>
          <Para2>
            We're a fastest growing community working hard to make things
            happen. We've got a lot of hands-on cumulative experience and a good
            amount of fire under our tails, though we are young.
          </Para2>
        </Community>
        <Blank></Blank>
        <Team>
          <Cod>
            <Code>500k+</Code>
            <C>Lines of Code</C>
          </Cod>
          <Hr></Hr>
          <Mem>
            <Members>140+</Members>
            <M>Team Members</M>
          </Mem>
          <Hr2></Hr2>
          <Pr>
            <Projects>65+</Projects>
            <Pro>Completed Projects</Pro>
          </Pr>
        </Team>
      </OurHead>
    </Div4>
  );
}

export default OurNumbers;
