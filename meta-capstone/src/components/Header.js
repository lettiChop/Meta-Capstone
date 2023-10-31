import Logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <nav className="navbar">
          <img src={Logo} className="logo"></img>
          <ul className="navbar-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
