import AppLayout from "src/components/layout";
import "src/styles/contact.scss";
import "src/styles/contact.queries.scss";

export default function ContactRoute() {
  return (
    <AppLayout>
      <main id="contact">
        <section className="hero">
          <div className="hero-img">
            <p className="heading-secondary contact">Contact Us</p>
            <p className="contact contact-txt">
              We&apos;d love you hear from you
            </p>
          </div>
        </section>
        <section className="cta-map">
          <div className="container grid grid--2-cols">
            <div className="newsletter">
              <form className="newsletter-form" name="sign-up">
                <div className="ele">
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="Jim Halpert"
                    name="full-name"
                    required
                  />
                </div>
                <div className="ele">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>
                <div className="ele">
                  <label htmlFor="number">Contact Number</label>
                  <input id="number" type="number" name="number" required />
                </div>

                <button className="btn btn--form">Sign up now</button>
              </form>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2895501011317!2d80.17496357523532!3d13.01722418730235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52611558384aad%3A0x49940afe9e23341a!2sPower%20Zone%20Gym!5e0!3m2!1sen!2sin!4v1681911633023!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="heading-secondary">GET IN TOUCH</p>
              <p className="map-text">
                Our team is always ready to hear from you. We stand by <br />
                responding within 24 hours on weekdays and 48 hours on weekends.
              </p>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
