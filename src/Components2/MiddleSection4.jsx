import React from "react";

import {
  Div6,
  ImgLeft,
  SideImg,
  MAIN,
  Pera4,
  Head5,
  Span4,
  Pera5,
  ArrowImg,
  LeftArrow,
  RightArrow,
} from "./MiddleSectionStyle4";

function MiddleSection4() {
  return (
    <Div6>
      <ImgLeft>
        <SideImg src="./images/sliderSideImg.png" alt="sideImg" />
      </ImgLeft>
      <MAIN>
        <Pera4>See our success in</Pera4>
        <Head5>Testimonials</Head5>
        <Span4>We Are The Best, And Our Customers Say It.</Span4>
        <Pera5>
          We've never been ones to brag, but we can't help but share some of the
          feedback we've gotten from our clients. Take a look at what they have
          to say about us:
        </Pera5>
      </MAIN>
      <ArrowImg>
        <LeftArrow src="./images/left.png" alt="" />
        <RightArrow src="./images/right.png" alt="right" />
      </ArrowImg>
    </Div6>
  );
}

export default MiddleSection4;
