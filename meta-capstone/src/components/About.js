import OwnersA from "../assets/Mario and Adrian A.jpg";
import OwnersB from "../assets/Mario and Adrian b.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrapper">
        <div className="about__content">
          <div className="about__text">
            <div className="about__text__heading">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>
              Where Italian Tradition Meets Windy City Flair. Join us for an
              unforgettable culinary adventure at Little Lemon Chicago and savor
              the taste of la dolce vita, right here in the heart of the Windy
              City.
            </p>
          </div>
          <div className="about__img">
            <img
              src={OwnersA}
              alt="Restaurant Owners"
              className="about__img--big"
            />
            <img
              src={OwnersB}
              alt="Restaurant Owners"
              className="about__img--small"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
