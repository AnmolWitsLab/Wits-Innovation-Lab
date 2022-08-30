import React from "react";
import {
  Div5,
  MainD,
  MainP,
  MainH,
  Span3,
  Pera2,
  Images,
  Nutrition,
  Tre,
  Farms,
  Aff,
  Bcg,
  Images2,
  Earn,
  Hermes,
  Design,
  Moon,
  Pay,
} from "./MiddleSectionStyle3";

function MiddleSection3() {
  return (
    <Div5>
      <MainD>
        <MainP>See who's winning with us</MainP>
        <MainH>Our Clients</MainH>
        <Span3>These Powerhouses Are Already Winning Business With Us.</Span3>
        <Pera2>
          We Love What We Do, And We Hope You'll Let Us Help You Too.
        </Pera2>
      </MainD>
      <Images>
        <Nutrition src="./images/nutrition.png" alt="nutrition" />
        <Tre src="./images/tre.png" alt="tre" />
        <Farms src="./images/farms.png" alt="farms" />
        <Aff src="./images/aff.png" alt="aff" />
        <Bcg src="./images/bcg.png" alt="bcg" />
      </Images>
      <Images2>
        <Earn src="./images/earn.png" alt="earn" />
        <Hermes src="./images/hermes.png" alt="hermes" />
        <Design src="./images/design.png" alt="design" />
        <Moon src="./images/moon.png" alt="moon" />
        <Pay src="./images/pay.png" alt="pay" />
      </Images2>
    </Div5>
  );
}

export default MiddleSection3;
