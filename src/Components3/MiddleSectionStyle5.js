import styled from "styled-components";

export const Div7 = styled.div`
  margin: 9vw 0 0 0;
`;

export const Blog = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 9.5vw;
`;

export const Pera5 = styled.p`
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 1.2vw;
`;

export const Head = styled.h1`
  border-bottom: 0.8vw solid #f9c51c;
  height: 3.8vw;
  width: fit-content;
  color: rgba(29, 29, 29, 1);
  font-weight: 700;
  font-size: 3.4vw;
  margin: 0 0 1vw 0;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
`;

export const Pera6 = styled.p`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  width: calc(100% - 35.5%);
  font-weight: 600;
  font-size: 1.38vw;
  margin: 1vw 0 0 0;
`;

export const ArrowImg = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 1.4vw;
`;

export const LeftArrow = styled.img`
  width: clamp(2rem, 4vw, 10rem);
`;

export const RightArrow = styled.img`
  width: clamp(2rem, 4vw, 10rem);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas: "wil blockchain" "wil commercial";
  margin: 5vw 0 0 9.8vw;
  height: fit-content;
  width: fit-content;
  gap: 1.5vw;
`;

export const Wil = styled.img`
  width: clamp(10rem, 35.5vw, 60rem);
  grid-area: wil;
  height: 100%;
`;

export const WilBlog = styled.p``;

export const Ame = styled.p``;

export const Blockchain = styled.img`
  width: clamp(10rem, 29.5vw, 60rem);
  grid-area: blockchain;
`;

export const Block = styled.p``;

export const Commercial = styled.img`
  width: clamp(10rem, 29.5vw, 60rem);
  height: 100%;
  grid-area: commercial;
`;

export const Comm = styled.p``;
