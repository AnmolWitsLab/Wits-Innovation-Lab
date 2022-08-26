import React from "react";
import { Div4, Side, SideImg, Head, Head6, Head1 } from "./MiddleSectionStyle";

function MiddleSection() {
  return (
    <Div4>
      <Side>
        <SideImg src="./images/side-img.png" alt="side-img" />
      </Side>
      <Head>
        <Head6>Let us tell a story of</Head6>
        <Head1>Our Numbers</Head1>
      </Head>
    </Div4>
  );
}

export default MiddleSection;
