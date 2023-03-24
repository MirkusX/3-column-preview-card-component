import { cardInfo } from "./cardInfo";
import {
  CardDiv,
  StyledButton,
  StyledDiv,
  StyledP,
  StyledSection,
} from "./StyledComponents";

export const ThreeCards = () => {
  return (
    <StyledSection>
      <StyledDiv>
        {cardInfo.map((item, index) => {
          return (
            <CardDiv key={index}>
              <img src={item.icon} />
              <h1>{item.title}</h1>
              <StyledP>{item.desc}</StyledP>
              <StyledButton>Learn More</StyledButton>
            </CardDiv>
          );
        })}
      </StyledDiv>
    </StyledSection>
  );
};
