import React from "react";
import {
  Div7,
  ImgRight,
  BgImg,
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
  Content,
  WilBlog,
  Ame,
  Blockchain,
  Block,
  Commercial,
  Comm,
} from "styles/ourBlog";
import bg from "assets/images/bg.png";
import left from "assets/images/left.png";
import right from "assets/images/right.png";
import wil from "assets/images/wil.png";
import blockchain from "assets/images/blockchain.png";
import commercial from "assets/images/commercial.png";

function OurBlog() {
  return (
    <Div7>
      <ImgRight>
        <BgImg src={bg} alt="bg" />
      </ImgRight>
      <Blog>
        <Pera5>Our Thoughts in</Pera5>
        <Head>Our Blog</Head>
        <Section>
          <Pera6>
            We're here to make your thoughts on tech a little more… thought-ful.
          </Pera6>
          <ArrowImg>
            <LeftArrow src={left} alt="left" />
            <RightArrow src={right} alt="right" />
          </ArrowImg>
        </Section>
      </Blog>
      <Grid>
        <Wil src={wil} alt="wil" />
        <Content>
          <WilBlog>WIL Blog</WilBlog>
          <Ame>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat
          </Ame>
        </Content>
        <Blockchain src={blockchain} alt="blockchain" />
        <Block>Block Chain</Block>
        <Commercial src={commercial} alt="commercial" />
        <Comm>Commercial</Comm>
      </Grid>
    </Div7>
  );
}

export default OurBlog;
