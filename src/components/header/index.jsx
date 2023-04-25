import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import "./style.scss";
import { useState } from "react";
import classNames from "classnames";
import { auth } from "src/modules/firebase";

const links = [
  { text: "BMI", href: "/#" },
  { text: "Products", href: "/products" },
  { text: "Routines", href: "/#section--3" },
  { text: "About Us", href: "/about" },
  { text: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const user = auth.currentUser;

  const handleNavClick = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header className={classNames("header", { "nav-open": isNavOpen })}>
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
          {/* Hide Auth button when user is signed in */}
          {!user && (
            <li>
              <a className="header-nav-link btn--nav caps" href="/auth">
                Join Now
              </a>
            </li>
          )}
        </ul>

        <button className="btn-mobile-nav" onClick={handleNavClick}>
          <IonIcon class="icon-mobile-nav" name="menu-outline" />
          <IonIcon class="icon-mobile-nav" name="close-outline" />
        </button>

        {/* Show pfp url if user logged in */}
        {user && (
          <div className="pfp-wrapper">
            <img src={user.photoURL} alt={user.displayName} />
          </div>
        )}
      </nav>
    </header>
  );
}
