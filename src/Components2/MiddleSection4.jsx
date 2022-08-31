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
  Div,
  MAIN2,
  Cot,
  Child,
  First,
  Girl,
  Second,
  Jane,
  JaneP,
  JanePost,
  ImgStar,
  Star,
  Null,
  Child2,
  Des,
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
        <Div>
          <Pera5>
            We've never been ones to brag, but we can't help but share some of
            the feedback we've gotten from our clients. Take a look at what they
            have to say about us:
          </Pera5>

          <ArrowImg>
            <LeftArrow src="./images/left.png" alt="left" />
            <RightArrow src="./images/right.png" alt="right" />
          </ArrowImg>
        </Div>
        <MAIN2>
          <Cot src="./images/comas.png" alt="comas" />
          <Child>
            <First>
              <Girl src="./images/profile.png" alt="profile" />
            </First>
            <Second>
              <Jane>
                <JaneP>Jane Cooper</JaneP>
                <JanePost>Manager at Google</JanePost>
                <ImgStar>
                  <Star src="./images/fill.png" alt="fill" />
                  <Star src="./images/fill.png" alt="fill" />
                  <Star src="./images/fill.png" alt="fill" />
                  <Star src="./images/fill.png" alt="fill" />
                  <Null src="./images/null.png" alt="null" />
                </ImgStar>
              </Jane>
            </Second>
          </Child>
          <Child2>
            <Des>
              "Thanks guys, keep up the good work! I wish I would have thought
              of it first. It's incredible. I don't always clop, but when I do,
              it's because of Wits Innovation Lab."
            </Des>
          </Child2>
        </MAIN2>
      </MAIN>
    </Div6>
  );
}

export default MiddleSection4;
