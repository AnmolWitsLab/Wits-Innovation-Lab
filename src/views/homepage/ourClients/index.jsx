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
} from "styles/ourClients";
import nutrition from "assets/images/nutrition.png";
import tre from "assets/images/tre.png";
import farms from "assets/images/farms.png";
import aff from "assets/images/aff.png";
import bcg from "assets/images/bcg.png";
import earn from "assets/images/earn.png";
import hermes from "assets/images/hermes.png";
import design from "assets/images/design.png";
import moon from "assets/images/moon.png";
import pay from "assets/images/pay.png";

function OurClients() {
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
        <Nutrition src={nutrition} alt="nutrition" />
        <Tre src={tre} alt="tre" />
        <Farms src={farms} alt="farms" />
        <Aff src={aff} alt="aff" />
        <Bcg src={bcg} alt="bcg" />
      </Images>
      <Images2>
        <Earn src={earn} alt="earn" />
        <Hermes src={hermes} alt="hermes" />
        <Design src={design} alt="design" />
        <Moon src={moon} alt="moon" />
        <Pay src={pay} alt="pay" />
      </Images2>
    </Div5>
  );
}

export default OurClients;
