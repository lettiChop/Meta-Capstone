import Rating from "./Rating";

export default function Testimonial({ userimage, username, rating, text }) {
  return (
    <div className="testimonial">
      <div className="testimonial__head">
        <img
          className="testimonial__head__img"
          src={userimage}
          alt="testimonial headshot"
        />
        <h3 className="card-title">{username}</h3>
      </div>
      <Rating rating={rating} />
      <p className="card-text">{text}</p>
    </div>
  );
}
