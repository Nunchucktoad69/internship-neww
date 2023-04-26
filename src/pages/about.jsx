import AppLayout from "src/components/layout";
import Staff from "src/components/staff";

const staff = [
  {
    name: "K.Kevin Malone",
    image: "/images/staff/trainer1.jpg",
    desig: "Full body Neurologist",
  },
  {
    name: "K.Kevin Malone",
    image: "/images/staff/trainer2.jpg",
    desig: "Full body Neurologist",
  },
  {
    name: "K.Kevin Malone",
    image: "/images/staff/trainer3.jpg",
    desig: "Full body Neurologist",
  },
  {
    name: "K.Kevin Malone",
    image: "/images/staff/trainer4.jpg",
    desig: "Full body Neurologist",
  },
  {
    name: "K.Kevin Malone",
    image: "/images/staff/trainer5.jpg",
    desig: "Full body Neurologist",
  },
  {
    name: "K.Kevin Malone",
    image: "/images/staff/trainer6.jpg",
    desig: "Full body Neurologist",
  },
];

export default function AboutRoute() {
  return (
    <AppLayout>
      <main>
        <div className="contain">
          <div className="w-100 h-100">
            <div
              className="carousel slide"
              id="carouselExample"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/img/ss3.jpg" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src="/img/ss2.jpg" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src="/img/ss.jpg" className="d-block w-100" />
                </div>
                <a
                  href="#carouselExample"
                  className="carousel-control-prev"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previ</span>
                </a>
                <a
                  href="#carouselExample"
                  className="carousel-control-next"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">next</span>
                </a>
              </div>
              /
            </div>
          </div>
          <section className="about-us">
            <p className="heading-secondary">About Us</p>
            <p className="about-text">
              Within a year of our opening on January 27th, 2022, our gym has
              over 1000+ clients. We
              <br /> offer a wide range of services to individuals between the
              ages of 13 and 70+ based on their specific concerns,
              <br /> additionally, we have recently upgraded to another floor in
              February 2023
              <br /> to provide facilities for CrossFit, Zumba, and yoga.
            </p>
          </section>
          <section className="staff">
            <span className="heading-secondary container">Our Team</span>
            <div className="container grid grid--3-cols grid--center-v pics">
              {staff.map((s, i) => (
                <Staff key={i} desig={s.desig} image={s.image} name={s.name} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </AppLayout>
  );
}
