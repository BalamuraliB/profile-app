import React from "react";
import styled from "styled-components";
import HeaderSection from "./profile/HeaderSection/HeaderSection";
import MainInfo from "./profile/MainInfo/MainInfo";
import SocialContainer from "./profile/Social/SocialContainer";

function App() {
  return (
    <Container>
      <HeaderSection />
      <MainInfo />
      <SocialContainer /> 
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0;
`;

export default App;
