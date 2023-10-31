import Logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={Logo}></img>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Reservations</a>
          </li>
          <li>
            <a>Order online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
