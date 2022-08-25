import React from "react";
import {
  Div2,
  Heading,
  Span,
  Pera,
  MiddleBtn,
  BtnTellUs,
  BtnArrow,
} from "./MiddleStyle";

function Middle() {
  return (
    <Div2>
      <Heading>
        We're not just IT. We're a<Span> Business Transformation Company.</Span>
      </Heading>
      <Pera>
        We are more than just a business. We're a community of like-minded
        individuals who share our love for connecting people with the best in
        their area.
      </Pera>
      <MiddleBtn>
        <BtnTellUs>Tell Us About Your Project</BtnTellUs>
        <BtnArrow>
          <i className="fa-solid fa-angle-right"></i>
        </BtnArrow>
      </MiddleBtn>
    </Div2>
  );
}

export default Middle;
