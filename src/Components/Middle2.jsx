import React from "react";
import { Div3, FollowUs, Line, MiddleIcons, Ic } from "./MiddleStyle2";

function Middle2() {
  return (
    <Div3>
      <FollowUs>Follow US</FollowUs>
      <Line></Line>
      <MiddleIcons>
        <Ic>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </Ic>
      </MiddleIcons>
    </Div3>
  );
}

export default Middle2;
