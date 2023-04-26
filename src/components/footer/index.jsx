import { Link } from "react-router-dom";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Link to="/" className="footer-logo-text">
            <span>
              <img src="/images/logo.png" className="logo" />
            </span>
          </Link>
          <ul className="social-links">
            <li>
              <Link to="/#" className="footer-link">
                <ion-icon className="social-icon" name="logo-facebook" />
              </Link>
            </li>
            <li>
              <Link to="/#" className="footer-link">
                <ion-icon className="social-icon" name="logo-instagram" />
              </Link>
            </li>
          </ul>
          <div className="copy-rights">
            {`Copyright &copy; ${new Date().getFullYear()} by Powerzone. All rights reserved.`}
          </div>
        </div>
        <div className="col-two">
          <ul className="col-two-content">
            <li>
              <Link to="/#" className="col-two-link">
                BMI
              </Link>
            </li>
            <li>
              <Link to="/products" className="col-two-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/#" className="col-two-link">
                Routine
              </Link>
            </li>
            <li>
              <Link to="/about" className="col-two-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-three">
          <p className="col-three-link">
            <Link to="/#contact-us" className="col-two-link">
              Contact Us
            </Link>
          </p>
          <address className="contacts">
            <p className="address">
              Mukti Enclave :19/20, Manapakkam Main Rd, Manapakkam, Chennai,
              Tamil Nadu 600125
            </p>
            <a className="contacts-info">+91 8680880109</a>
            <a className="contacts-info">powerzonegymchennai@gmail.com </a>
          </address>
        </div>
      </div>
    </footer>
  );
}
