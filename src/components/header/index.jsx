import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { useEffect, useState } from "react";
import classNames from "classnames";
import "./style.scss";
import { getAuth } from "firebase/auth";

const links = [
  { text: "BMI", href: "/#" },
  { text: "Products", href: "/products" },
  { text: "Routines", href: "/#section--3" },
  { text: "About Us", href: "/about" },
  { text: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const user = getAuth().currentUser;

  const handleStickyNav = (entries) => {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  };

  const handleNavClick = () => {
    setNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const header = document.querySelector(".header");
    const headerHeight = header.getBoundingClientRect().height;

    const observer = new IntersectionObserver(handleStickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${headerHeight}px`,
    });

    const dummy = document.querySelector(".dummy");
    observer.observe(dummy);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkHover = (event) => {
    console.log(event.type);
    const ul = document.querySelector(".header-nav-list");

    if (event.target.classList.contains("header-nav-link")) {
      if (event.type === "mouseover") {
        ul.classList.add("hover");
      } else {
        ul.classList.remove("hover");
      }
    }
  };

  return (
    <>
      <header className={classNames("header", { "nav-open": isNavOpen })}>
        <nav className="nav-container">
          <img className="logo" alt="Powerzone logo" src="/images/logo.png" />

          <ul
            className="header-nav-list"
            onMouseOver={handleLinkHover}
            onMouseOut={handleLinkHover}
          >
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.href}
                  className="header-nav-link caps"
                  onMouseOver={handleLinkHover}
                  onMouseOut={handleLinkHover}
                >
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
          {user && user.photoURL && (
            <div className="pfp-wrapper">
              <img src={user.photoURL} alt={user.displayName} />
            </div>
          )}
        </nav>
      </header>
      <div className="dummy"></div>
    </>
  );
}
