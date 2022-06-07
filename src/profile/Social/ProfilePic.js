import styled from "styled-components";
import profilePic from "../../assets/profile.jpg";

const ProfilePic = (props) => {
  return (
    <ImageContainer>
      <Image src={profilePic} alt="profile pic" />
    </ImageContainer>
  );
};

export default ProfilePic;

const ImageContainer = styled.div`
  border-radius: 150px;
  margin-bottom: 50px;
  margin-left: 25px;
  margin-top: 20px;
  overflow: hidden;
  width: 75%;
`;
const Image = styled.img`
  width: 150px;
`;
