import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon icon="fa-solid fa-arrow-right-to-arc" />;

const Experience = (props) => {
  const { experience } = props;
  const [isLocked, setIsLocked] = useState(false);
  const fadeStyle = {
    "--fa-animation-duration": "2s",
    "--fa-fade-opacity": 0.6,
  };
  return (
    <CompanyContainer>
      <DataContainer>
        <YearBox>{experience.year}</YearBox>
        <InfoBox>
          <h3>{experience.position}</h3>
          <Button
            onClick={() => {
              setIsLocked(!isLocked);
            }}
          >
            {isLocked ? (
              <FontAwesomeIcon
                icon={faXmarkSquare}
                size="1x"
                fade
                style={fadeStyle}
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                size="1x"
                fade
                style={fadeStyle}
              />
            )}
          </Button>
          <h4>{experience.oraganisation}</h4>
        </InfoBox>
      </DataContainer>
      <Responsibilities isLocked={isLocked}>
        {experience.description}
      </Responsibilities>
    </CompanyContainer>
  );
};

export default Experience;

const YearBox = styled.div`
  background-color: #2339ab;
  color: white;
  font-style: italic;
  font-weight: 100;
  height: 24px;
  margin: auto 20px auto 0;
  text-align: center;
  transform: skew(20deg);
  width: 100px;
`;
const InfoBox = styled.div`
  border-left: 1px solid black;
  padding-left: 20px;
  h3 {
    display: inline;
    margin-right: 10px;
  }
  h3,
  h4,
  p {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;
const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
const Responsibilities = styled.div`
  display: ${({ isLocked }) => (isLocked ? "block" : "none")};
  margin-top: 10px;
`;
const CompanyContainer = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
`;
const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
