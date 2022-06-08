import { CENTERED_H1, CENTERED_P } from "../Common/CommonComp";
import styled from "styled-components";
const AboutMe = (props) => {
  return (
    <>
      <CENTERED_H1>ABOUT ME</CENTERED_H1>
      <ABOUT_DESC>
        Efficient, resourceful, and organized individual with 8+ years of
        experience in providing meaningful solutions to business. An experienced
        full stack developer with excellent command of languages like Java,
        Javascript, TypeScript, and python and different related technologies
        including React, Spring, AngularJs as well as database design and system
        design. Excellent problem solver and possess the ability to establish
        core organizational and personnel goals and procedures pertaining to the
        needs of the organization. A Scrum Lead and a certified AWS solutions
        architect with experience in cloud base technologies and infrastructure.
      </ABOUT_DESC>
    </>
  );
};

const ABOUT_DESC = styled(CENTERED_P)`
  text-align: justify;
  margin-bottom: 2%;
`;
export default AboutMe;
