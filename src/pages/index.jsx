import AppLayout from "src/components/layout";
import "src/styles/home.scss";

export default function Home() {
  return (
    <AppLayout>
      <main>
        <section className="hero" id="section--0">
          <div className="hero-text">
            <h1 className="caps">Believe</h1>
            <p className="header-text">
              The man who think they can and the man who think they can&apos;t,
              are both right
            </p>
          </div>
        </section>

        <section className="section" id="section--1">
          <div className="container">
            <span className="subheading">Our programs</span>
            <p className="heading-secondary">Beginner? We got you covered</p>
          </div>
          <div className="container grid grid--2-cols">
            <div className="program-text-box">
              <div className="program-heading-box">
                <p className="program-number">01</p>
                <p className="heading-tertiary">personal training</p>
              </div>
              <p className="program-description">
                Personal training provides tailored fitness guidance and support
                to help you achieve your desired results. A personal trainer
                creates a customized workout plan based on your unique needs and
                fitness level, offering ongoing feedback and motivation to keep
                you on track.
              </p>
            </div>
            <div className="program-img-box">
              <img src="/images/personal.jpg" className="program-img" alt="" />
            </div>

            <div className="program-img-box">
              <img src="/images/personal.jpg" className="program-img" alt="" />
            </div>
            <div className="program-text-box">
              <div className="program-heading-box">
                <p className="program-number">02</p>
                <p className="heading-tertiary">group training</p>
              </div>
              <p className="program-description">
                Our gym offers group training sessions to provide a fun and
                social way to achieve your fitness goals. Our certified trainers
                lead each session, ensuring proper form and technique while
                motivating you to push your limits. Join us for a rewarding and
                challenging workout with like-minded individuals.
              </p>
            </div>

            <div className="program-text-box">
              <div className="program-heading-box">
                <p className="program-number">03</p>
                <p className="heading-tertiary">strength training</p>
              </div>
              <p className="program-description">
                We also offer you the chance to focus on strength training with
                our state-of-the-art equipment and experienced trainers. Our
                customized plans will help you build muscle, increase your
                strength, and improve your overall health. Join us and take your
                fitness journey to the next level.
              </p>
            </div>
            <div className="program-img-box">
              <img src="/images/personal.jpg" className="program-img" alt="" />
            </div>

            <div className="program-img-box">
              <img src="/images/personal.jpg" className="program-img" alt="" />
            </div>
            <div className="program-text-box">
              <div className="program-heading-box">
                <p className="program-number">04</p>
                <p className="heading-tertiary">crossfit</p>
              </div>
              <p className="program-description">
                CrossFit is a high-intensity workout program designed to build
                strength and endurance through functional movements. It
                incorporates elements from weightlifting, gymnastics, and
                cardio, making it challenging and diverse. CrossFit offers a
                supportive community and the opportunity to push yourself to
                your limits.
              </p>
            </div>

            <div className="program-text-box">
              <div className="program-heading-box">
                <p className="program-number">05</p>
                <p className="heading-tertiary">hiit and cardio</p>
              </div>
              <p className="program-description">
                High-Intensity Interval Training (HIIT) and cardio workouts
                offer numerous health benefits, including increased
                cardiovascular endurance, improved metabolism, and fat loss.
                They also boost mood and mental health, making them a great
                addition to any fitness routine.
              </p>
            </div>
            <div className="program-img-box">
              <img src="/images/personal.jpg" className="program-img" alt="" />
            </div>

            <div className="program-img-box">
              <img src="/images/personal.jpg" className="program-img" alt="" />
            </div>
            <div className="program-text-box">
              <div className="program-heading-box">
                <p className="program-number">06</p>
                <p className="heading-tertiary">Zumba</p>
              </div>
              <p className="program-description">
                Our gym offers Zumba classNamees, a fun and energetic dance
                workout that combines Latin and international music with
                easy-to-follow moves. It&apos;s a great way to burn calories,
                improve coordination, and boost your mood while enjoying a
                vibrant and lively atmosphere.
              </p>
            </div>

            <div className="program-text-box">
              <div className="program-heading-box">
                <p className="program-number">06</p>
                <p className="heading-tertiary">yoga</p>
              </div>
              <p className="program-description">
                Our yoga classNamees offer a welcoming and supportive
                environment for individuals of all levels, led by experienced
                instructors who guide you through a variety of poses and
                breathing techniques. Come join us and experience the benefits
                of yoga for yourself!
              </p>
            </div>
            <div className="program-img-box">
              <img src="/images/personal.jpg" className="program-img" alt="" />
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
