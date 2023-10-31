import Button from "../components/Button";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.image}></img>
        <div className="card-header-text">
          <h3 className="card-title">{props.title}</h3>
          <span className="card-price">{props.price}</span>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{props.text}</p>
        <Button href={props.href} type={"secondary"}>
          Order a delivery
        </Button>
      </div>
    </div>
  );
}
