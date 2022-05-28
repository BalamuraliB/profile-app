import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const SocialMediaLink = (props) => {
  return (
    <MediaLinkContainer>
      <MediaLinkSection>
        <MediaLabel>Email:</MediaLabel>
        balu.indira@gmail.com
      </MediaLinkSection>
      <MediaLinkSection>
        <MediaLabel>Phone:</MediaLabel>
        +91 9495631186
      </MediaLinkSection>
      <MediaLinkSection>
        <MediaLabel>Website:</MediaLabel>
        wwww.iambuildingit.com
      </MediaLinkSection>
      <MediaLinkSection>
        <FontAwesomeIcon icon={brands("instagram")} size="2x" />
        <MediaLink href="https://www.instagram.com/balamuraliindiradevi">
          BalamuraliIndiradevi
        </MediaLink>
      </MediaLinkSection>
      <MediaLinkSection>
        <FontAwesomeIcon icon={brands("linkedin")} size="2x" />
        <MediaLink href="https://www.linkedin.com/in/balamurali-b-aa457777/">
          Balamurali
        </MediaLink>
      </MediaLinkSection>
      <MediaLinkSection>
        <FontAwesomeIcon icon={brands("github")} size="2x" />
        <MediaLink href="https://github.com/BalamuraliB">BalamuraliB</MediaLink>
      </MediaLinkSection>
    </MediaLinkContainer>
  );
};

export default SocialMediaLink;

const MediaLinkContainer = styled.div`
  color: white;
  font-size: 15px;
  width: 100%;
`;

const MediaLinkSection = styled.div`
  margin-bottom: 20px;
  margin-left: 15px;
  text-align: left;
`;

const MediaLink = styled.a`
  color: white;
  margin-left: 5px;
  vertical-align: super;
`;

const MediaLabel = styled.div`
  font-weight: bold;
`;
