import React from "react";
import Middle2 from "./Middle2";
import MiddleImage from "./MiddleImage";
import {
  Div2,
  Heading,
  Span,
  Pera,
  MiddleBtn,
  BtnTellUs,
  BtnArrow,
  Ico,
} from "./MiddleStyle";

function Middle() {
  return (
    <>
      <Div2>
        <Heading>
          We're not just IT. We're a
          <Span> Business Transformation Company.</Span>
        </Heading>
        <Pera>
          We are more than just a business. We're a community of like-minded
          individuals who share our love for connecting people with the best in
          their area.
        </Pera>
        <MiddleBtn>
          <BtnTellUs>Tell Us About Your Project</BtnTellUs>
          <BtnArrow>
            <Ico>
              <i className="fa-solid fa-angle-right"></i>
            </Ico>
          </BtnArrow>
        </MiddleBtn>

        <Middle2 />
        <MiddleImage />
      </Div2>
    </>
  );
}

export default Middle;
