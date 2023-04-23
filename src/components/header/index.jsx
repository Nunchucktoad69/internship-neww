import { Link } from "react-router-dom";
import "src/styles/header.scss";

const links = [
  { text: "BMI", href: "#" },
  { text: "Products", href: "/products" },
  { text: "Routines", href: "#section--3" },
  { text: "About Us", href: "/about" },
  { text: "Contact Us", href: "/contact" },
];

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <img className="logo" alt="Powerzone logo" src="/images/logo.png" />

        <ul className="header-nav-list">
          {links.map((item, i) => (
            <li key={i}>
              <Link className="header-nav-link caps" to={item.href}>
                {item.text}
              </Link>
            </li>
          ))}
          <li>
            <a className="header-nav-link btn--nav caps" href="#">
              Join Now
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}
