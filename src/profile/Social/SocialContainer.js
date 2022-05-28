import styled from "styled-components";
import ProfilePic from "./ProfilePic";
import SocialMediaLink from "./SocialMediaLinks/SocialMediaLink";

const SocialContainer = (props) => {
  return (
    <Container>
      <ProfilePic />
      <SocialMediaLink />
    </Container>
  );
};

export default SocialContainer;

const Container = styled.div`
  background-color: #2339ab;
  height: 100%;
  margin-left: 20px;
  position: fixed;
  width: 200px;
  z-index: 1;
`;
