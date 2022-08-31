import React from "react";
import {
  Div7,
  Blog,
  Pera5,
  Head,
  Section,
  Pera6,
  ArrowImg,
  LeftArrow,
  RightArrow,
  Grid,
  Wil,
  WilBlog,
  Ame,
  Blockchain,
  Block,
  Commercial,
  Comm,
} from "./MiddleSectionStyle5";

function MiddleSection5() {
  return (
    <Div7>
      <Blog>
        <Pera5>Our Thoughts in</Pera5>
        <Head>Our Blog</Head>
        <Section>
          <Pera6>
            We're here to make your thoughts on tech a little more… thought-ful.
          </Pera6>
          <ArrowImg>
            <LeftArrow src="./images/left.png" alt="left" />
            <RightArrow src="./images/right.png" alt="right" />
          </ArrowImg>
        </Section>
      </Blog>
      <Grid>
        <Wil src="./images/wil.png" alt="wil" />
        <WilBlog>WIL Blog</WilBlog>
        <Ame>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat
        </Ame>
        <Blockchain src="./images/blockchain.png" alt="blockchain" />
        <Block>Block Chain</Block>
        <Commercial src="./images/commercial.png" alt="commercial" />
        <Comm>Commercial</Comm>
      </Grid>
    </Div7>
  );
}

export default MiddleSection5;
