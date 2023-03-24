import { cardInfo } from "./cardInfo";
import {
  CardDiv,
  StyledButton,
  StyledDiv,
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
              <p>{item.desc}</p>
              <StyledButton>Learn More</StyledButton>
            </CardDiv>
          );
        })}
      </StyledDiv>
    </StyledSection>
  );
};
