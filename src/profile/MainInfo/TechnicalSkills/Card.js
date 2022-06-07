import styled from "styled-components";
import java from "../../../assets/java.png";
import Rating from "./Rating";

const Card = (props) => {
  return (
    <CardDiv>
      <Image src={java} alt=""/>
      <h5>Java</h5>
      <Rating rating={4} />
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  background-color: #8b8e94;
  border-radius: 5%;
  height: 320px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center ;
  width: 250px;
  h5{
    margin: 0;
  }
`;
const Image = styled.img`
  background-color: white;
  height: 50%;
  margin-top: 10px;
  width: 80%;
`;