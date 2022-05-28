import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Rating = (props) => {
  const { rating } = props;
  const fullStars = Math.floor(rating / 1);
  const halfStars = rating % 1 > 0;
  const ratingStars = [];
  for (var i = 0; i < fullStars; i++) {
    ratingStars.push(<FontAwesomeIcon icon={faStar} />);
  }
  return (
    <RatingContainer>
      {ratingStars}
      {halfStars && <FontAwesomeIcon icon={faStarHalfStroke} />}
    </RatingContainer>
  );
};

export default Rating;

const RatingContainer = styled.div`
  color: yellow;
  text-align: center;
  width: 100%;
`;
