import styled from "styled-components";

const HeaderSection = (props) => {
  return (
    <HeaderContainer>
      <DataContainer>
        <Name>Balamurali "Bala" Balachandran</Name>
        <Position>Full Stack Engineer / Leader</Position>
      </DataContainer>
    </HeaderContainer>
  );
};

export default HeaderSection;

const HeaderContainer = styled.div`
  background-color: #436acc;
  height: 150px;
  margin-top: 0px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;
const DataContainer = styled.div`
  color: white;
  margin-left: 250px;
  text-align: left;
`;

const Name = styled.h1`
  font-size: 4.25vw;
  font-weight: bolder;
  margin-top: 10px;
  margin-bottom: 0px;
`;

const Position = styled.div`
  background-color: #333948;
  font-size: 26px;
  font-style: italic;
  font-weight: 100;
  padding: 5px;
  text-align: center;
  width: 350px;
`;
