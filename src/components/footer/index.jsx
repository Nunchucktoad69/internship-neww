import "src/styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="index.html" className="footer-logo-text">
            <span>
              <img src="/images/logo.png" className="logo" />
            </span>
          </a>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon"
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon"
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>
          </ul>
          <div className="copy-rights">
            Copyright &#169; 2023 by Powerzone. All rights reserved.
          </div>
        </div>
        <div className="col-two">
          <ul className="col-two-content">
            <li>
              <a href="" className="col-two-link">
                BMI
              </a>
            </li>
            <li>
              <a href="html/products.html" className="col-two-link">
                Products
              </a>
            </li>
            <li>
              <a href="" className="col-two-link">
                Routine
              </a>
            </li>
            <li>
              <a href="html/about.html" className="col-two-link">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-three">
          <p className="col-three-link">
            <a href="#contact-us" className="col-two-link">
              Contact Us
            </a>
          </p>
          <address className="contacts">
            <p className="address">
              Mukti Enclave :19/20, Manapakkam Main Rd, Manapakkam, Chennai,
              Tamil Nadu 600125
            </p>
            <p>
              <a className="contacts-info">+91 8680880109</a>
              <a className="contacts-info">powerzonegymchennai@gmail.com </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}
