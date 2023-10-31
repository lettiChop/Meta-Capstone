import Food from "../assets/restauranfood.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__text__heading">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>
              Step into a world of tantalizing flavors, where our chef's passion
              for authentic Italian cuisine combines with the vibrant spirit of
              Chicago. From classic pasta dishes to contemporary twists on
              beloved recipes, every bite is a journey through the heart of
              Italy.
            </p>
            <Button href={"#"} type={"primary"}>
              Reserve a Table
            </Button>
          </div>
          <div className="hero__img">
            <img src={Food} alt="restaurant food" />
          </div>
        </div>
      </div>
    </section>
  );
}
