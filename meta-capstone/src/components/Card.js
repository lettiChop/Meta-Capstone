import Button from "../components/Button";

export default function Card({image, title, price, text, href}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image}></img>
        <div className="card-header-text">
          <h3 className="card-title">{title}</h3>
          <span className="card-price">{price}</span>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <Button href={href} type={"secondary"}>
          Order a delivery
        </Button>
      </div>
    </div>
  );
}
