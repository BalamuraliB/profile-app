/* eslint-disable no-unused-vars */
import styled from "styled-components";
import underline from "../../assets/undeline12.png";

const CENTERED_H1 = styled.h1`
  font-size: 2em;
  font-weight: 300;
  margin: 0;
  text-align: center;
  ::after {
    content: "";
    display: block;
    height: 40px;
    background-image: url(${underline});
    background-repeat: no-repeat;
    background-position: center bottom;
  }
`;

const CENTERED_P = styled.p`
  text-align: center;
  margin: 0px;
`;

export { CENTERED_H1, CENTERED_P };
