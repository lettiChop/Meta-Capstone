import Card from "./Card";
import Salad from "../assets/greek salad.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import Lemon from "../assets/lemon dessert.jpg";
import Button from "./Button";

const specials = [
  {
    id: 1,
    image: Salad,
    title: "Greek salad",
    price: "$12.99",
    text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    href: "#",
  },
  {
    id: 2,
    image: Bruchetta,
    title: "Bruchetta",
    price: "$5.99",
    text: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    href: "#",
  },
  {
    id: 3,
    image: Lemon,
    title: "Lemon Dessert",
    price: "$5.00",
    text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    href: "#",
  },
  {
    id: 4,
    image: Salad,
    title: "Special 1",
    price: "$10.99",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "#",
  },
  {
    id: 5,
    image: Salad,
    title: "Special 1",
    price: "$10.99",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "#",
  },
];

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <Button href="#" type={"primary"}>
          Online Menu
        </Button>
      </div>
      <div className="specials-grid">
        {specials.map((special) => (
          <Card
            key={special.id}
            image={special.image}
            title={special.title}
            price={special.price}
            text={special.text}
            href={special.href}
          />
        ))}
      </div>
    </section>
  );
}
