import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper footer">
        <img src={Logo} className="logo"></img>
        <section className="footer-links">
          <nav>
            <h3>Doormat Navigation</h3>
            <ul className="footer-links__link">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
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
          <nav>
            <h3>Contact</h3>
            <ul className="footer-links__link">
              <li>
                <a href="#">Adress</a>
              </li>
              <li>
                <a href="#">Phone number</a>
              </li>
              <li>
                <a href="#">Email</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h3>Social Media Links</h3>
            <ul className="footer-links__link">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
}
