import { cardInfo } from "./cardInfo";
import { StyledDiv, StyledSection } from "./StyledComponents";

export const ThreeCards = () => {
  return (
    <StyledSection>
      <StyledDiv>
        {cardInfo.map((item, index) => {
          return (
            <div key={index} style={{ backgroundColor: item.background }}>
              <img src={item.icon} />
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>Learn More</button>
            </div>
          );
        })}
      </StyledDiv>
    </StyledSection>
  );
};
