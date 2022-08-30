import styled from "styled-components";

export const Div6 = styled.div`
  border: 1px solid black;
  display: flex;
`;

export const ImgLeft = styled.div`
  border: solid black;
  width: calc(100% - 78%);
  margin: 0.5vw 0 0 0;
`;

export const SideImg = styled.img`
  width: calc(100% - 5%);
`;

export const MAIN = styled.div`
  border: 1px solid black;
  width: clamp(1rem, 47.5vw, 60rem);
  margin: 0vh 0vw 0vh 3.2vw;
`;

export const Pera4 = styled.p`
  border: 1px solid black;
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 1.2vw;
`;

export const Head5 = styled.h1`
  border: 1px solid black;
  color: rgba(29, 29, 29, 1);
  font-weight: 700;
  font-size: 3.4vw;
`;

export const Span4 = styled.span`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  width: calc(100% - 10%);
  font-weight: 700;
  margin: 0vh 0vw 0vh 0vw;
`;

export const Pera5 = styled.p`
  color: rgba(79, 79, 79, 1);
  text-transform: none;
  margin: 1.4vw 0 0;
  line-height: 1.5vw;
  font-size: clamp(0.5rem, 1.2vw, 2rem);
  font-weight: 400;
  width: clamp(24rem, 50vw, 60rem);
  word-spacing: 0.1rem;
`;

export const ArrowImg = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 60%);
  margin: 0vh 0vw 0vh 2vw;
`;

export const LeftArrow = styled.img`
  margin: 0 12vw;
  width: clamp(2rem, 4vw, 10rem);
`;

export const RightArrow = styled.img`
  width: clamp(2rem, 4vw, 10rem);
  margin: 0 0vw;
`;
