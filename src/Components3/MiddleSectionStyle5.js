import styled from "styled-components";

export const Div7 = styled.div`
  margin: 9vw 0 0 0;
`;

export const ImgRight = styled.div`
  position: absolute;
  width: calc(100% - 63.2%);
  right: 0;
`;

export const BgImg = styled.img`
  width: calc(100%);
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
  z-index: 1;
`;

export const Pera6 = styled.p`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
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
  position: relative;
`;

export const Wil = styled.img`
  width: clamp(10rem, 35.5vw, 60rem);
  grid-area: wil;
  height: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: clamp(6rem, 24.2vw, 40rem);
  right: clamp(1rem, 31vw, 50rem);
  background: #1d2e88;
  border-radius: 0.8vw;
  padding: 2.5vw 0 0vw 1.7vw;
  width: clamp(1rem, 35.5vw, 40rem);
  height: clamp(1rem, 10.95vw, 20rem);
`;

export const WilBlog = styled.h3`
  color: white;
  font-size: clamp(0.8rem, 1.6vw, 1.5rem);
  font-weight: 700;
`;

export const Ame = styled.p`
  margin: 1vw 0 0 0;
  color: white;
  font-size: clamp(0.52rem, 1.1vw, 1.5rem);
`;

export const Blockchain = styled.img`
  width: clamp(10rem, 29.5vw, 60rem);
  grid-area: blockchain;
`;

export const Block = styled.p`
  position: absolute;
  top: clamp(6rem, 13.5vw, 16rem);
  right: clamp(1rem, 19vw, 42rem);
  color: white;
  font-size: clamp(0.8rem, 1.6vw, 1.5rem);
  font-weight: 700;
`;

export const Commercial = styled.img`
  width: clamp(10rem, 29.5vw, 60rem);
  height: 100%;
  grid-area: commercial;
`;

export const Comm = styled.p`
  position: absolute;
  top: clamp(6rem, 31vw, 40rem);
  right: clamp(1rem, 18.5vw, 25rem);
  color: white;
  font-size: clamp(0.8rem, 1.6vw, 1.5rem);
  font-weight: 700;
`;
