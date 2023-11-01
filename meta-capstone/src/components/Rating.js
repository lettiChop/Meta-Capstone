import Star from "../assets/star.svg";
import StarEmpty from "../assets/starEmpty.svg";

export default function Rating({ rating = 4 | 5 }) {
  return rating === 5 ? (
    <div className="rating">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
    </div>
  ) : (
    <div className="rating">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={StarEmpty} alt="star empty" />
    </div>
  );
}
