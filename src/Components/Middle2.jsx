import React from "react";
import { Div3, FollowUs, Line, Img2, MiddleIcons } from "./MiddleStyle2";

function Middle2() {
  return (
    <Div3>
      <FollowUs>Follow US</FollowUs>
      <Line>
        <Img2 src="./images/horizontal-line.png" alt="line" />
      </Line>
      <MiddleIcons>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
      </MiddleIcons>
    </Div3>
  );
}

export default Middle2;