import styled from "styled-components";
import AboutMe from "./AboutMe";
import Education from "./Education/Education";
import TechnicalSkills from "./TechnicalSkills/TechnicalSkills";
import WorkExperience from "./WorkExperience/WorkExperience";

const MainInfo = (props) => {
  return (
    <MainContainer>
      <AboutMe />
      <TechnicalSkills />
      <WorkExperience />
      <Education />
    </MainContainer>
  );
};

export default MainInfo;

const MainContainer = styled.div`
  margin-top: 150px;
  margin-left: 220px;
  padding: 20px;
  position: absolute;
  text-align: left;
  width: 80%;
`;
