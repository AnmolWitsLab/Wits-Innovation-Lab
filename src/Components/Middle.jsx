import React from "react";
import { Div2 } from "./MiddleStyle";

function Middle() {
  return (
    <Div2>
      <h1 className="middle-h1">
        We're not just IT.
        <br />
        <span>
          We're a Business
          <br />
          Transformation
          <br />
          Company.
        </span>
      </h1>
      <p className="middle-p">
        We are more than just a business. We're a community of
        <br />
        like-minded individuals who share our love for
        <br />
        connecting people with the best in their area.
      </p>
      <div className="middle-btn">
        <button className="first">Tell Us About Your Project</button>
        <button className="second">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </Div2>
  );
}

export default Middle;
