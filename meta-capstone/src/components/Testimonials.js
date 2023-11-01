import Testimonial from "./Testimonial";
import Camille from "../assets/Camille.jpg";
import Vic from "../assets/Vic.jpg";
import Perry from "../assets/Perry.jpg";
import Freddie from "../assets/Freddie.jpg";

const testimonials = [
  {
    id: 1,
    userimage: Camille,
    username: "Camille U.",
    rating: 4,
    text: "Little Lemon is a culinary gem in Chicago. Their menu blends Italian and Mediterranean flavors to perfection.",
  },
  {
    id: 2,
    userimage: Vic,
    username: "Vic C.",
    rating: 5,
    text: "The Greek Salad is a personal favorite of mine, fresh and flavorful.",
  },
  {
    id: 3,
    userimage: Perry,
    username: "Perry A.",
    rating: 4,
    text: "The warm ambiance and friendly staff make every visit a joy.",
  },
  {
    id: 4,
    userimage: Freddie,
    username: "Freddie P.",
    rating: 5,
    text: "I can't recommend Little Lemon enough for a taste of Italy and Greece in the heart of Chicago.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrapper">
        <div className="testimonials__formatter">
          <h2>Testimonials</h2>
          <div className="testimonials__container">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                userimage={testimonial.userimage}
                username={testimonial.username}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
