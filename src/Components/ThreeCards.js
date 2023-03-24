import { cardInfo } from "./cardInfo";

export const ThreeCards = () => {
  return (
    <section>
      {cardInfo.map((item, index) => {
        return (
          <div>
            <img src={item.icon} />
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>Learn More</button>
          </div>
        );
      })}
    </section>
  );
};
