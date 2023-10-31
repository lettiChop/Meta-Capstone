import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer>
      <img src={Logo}></img>
      <section className="footer-links">
        <nav>
          <h3>Doormat Navigation</h3>
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
        <nav>
          <h3>Contact</h3>
          <ul>
            <li>
              <a>Adress</a>
            </li>
            <li>
              <a>Phone number</a>
            </li>
            <li>
              <a>Email</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}
