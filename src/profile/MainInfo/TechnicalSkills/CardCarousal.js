import styled from "styled-components";
import Card from "./Card";

const CardCarousal = (props) => {
  return (
    <CarousalContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CarousalContainer>
  );
};

export default CardCarousal;

const CarousalContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: none ;
`;
