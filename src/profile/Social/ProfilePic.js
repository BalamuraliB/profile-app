import styled from "styled-components";
import profilePic from "../../assets/profile.jpg";

const ProfilePic = (props) => {
  return (
    <ImageContainer>
      <img src={profilePic} alt="profile pic" />
    </ImageContainer>
  );
};

export default ProfilePic;

const ImageContainer = styled.div`
  border-radius: 150px;
  height: 150px;
  margin-bottom: 50px;
  margin-left: 25px;
  margin-top: 20px;
  overflow: hidden;
  width: 150px;
  
`;
