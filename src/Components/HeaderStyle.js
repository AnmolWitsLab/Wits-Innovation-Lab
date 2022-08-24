import styled from "styled-components";

export const Contain = styled.div`
  background-image: url(/images/back-img.png);
  height: 80vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 4vh;
`;
export const Div = styled.div`
  .Navbar {
    display: flex;
    align-items: center;
    margin: 0 1.5vw 0 5vw;
  }

  .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 80%);
  }

  img {
    width: clamp(5rem, 10vw, 15rem);
  }
  .List {
    width: calc(100% - 40%);
  }
  .List ul {
    display: flex;
    justify-content: center;
    column-gap: 1.5vw;
  }
  .List ul a {
    text-decoration: none;
  }

  .List ul li {
    list-style-type: none;
    color: #1d1d1d;
    margin: 0 0.5vw;
    font-size: clamp(0.6rem, 1.1vw, 1.3rem);
    font-weight: 600;
  }

  .List ul li i {
    font-size: clamp(0.6rem, 1.1vw, 1.3rem);
    margin: 0 0.5vw;
  }

  .btn {
    display: flex;
    width: calc(100% - 80%);
  }

  button {
    background: #f9c51c;
    border: none;
    font-size: clamp(0.6rem, 1.1vw, 1.3rem);
    padding: 1.2vh 1.5vw;
    font-weight: 600;
  }
`;
