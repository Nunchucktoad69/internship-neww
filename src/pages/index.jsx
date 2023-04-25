import { useEffect, useState } from "react";
import AppLayout from "src/components/layout";
import Plan from "src/components/plan";
import Program from "src/components/program";
import Review from "src/components/review";
import "src/styles/home.scss";
import "src/styles/home.queries.scss";

const programs = [
  {
    title: "Our programs",
    desc: `Personal training provides tailored fitness guidance and support
      to help you achieve your desired results. A personal trainer
      creates a customized workout plan based on your unique needs and
      fitness level, offering ongoing feedback and motivation to keep
      you on track.
    `,
    image: "/images/",
  },
  {
    title: "group training",
    desc: `Our gym offers group training sessions to provide a fun and
      social way to achieve your fitness goals. Our certified trainers
      lead each session, ensuring proper form and technique while
      motivating you to push your limits. Join us for a rewarding and
      challenging workout with like-minded individuals.
  `,
  },
  {
    title: "strength training",
    desc: `We also offer you the chance to focus on strength training with
      our state-of-the-art equipment and experienced trainers. Our
      customized plans will help you build muscle, increase your
      strength, and improve your overall health. Join us and take your
      fitness journey to the next level.
    `,
  },
  {
    title: "crossfit",
    desc: `CrossFit is a high-intensity workout program designed to build
      strength and endurance through functional movements. It
      incorporates elements from weightlifting, gymnastics, and
      cardio, making it challenging and diverse. CrossFit offers a
      supportive community and the opportunity to push yourself to
      your limits.
    `,
  },
  {
    title: "HIIT and cardio",
    desc: `High-Intensity Interval Training (HIIT) and cardio workouts
      offer numerous health benefits, including increased
      cardiovascular endurance, improved metabolism, and fat loss.
      They also boost mood and mental health, making them a great
      addition to any fitness routine.
    `,
  },
  {
    title: "Zumba",
    desc: `Our gym offers Zumba classes, a fun and energetic dance
      workout that combines Latin and international music with
      easy-to-follow moves. It&apos;s a great way to burn calories,
      improve coordination, and boost your mood while enjoying a
      vibrant and lively atmosphere.
    `,
  },
  {
    title: "yoga",
    desc: `Our yoga classes offer a welcoming and supportive
      environment for individuals of all levels, led by experienced
      instructors who guide you through a variety of poses and
      breathing techniques. Come join us and experience the benefits
      of yoga for yourself!
    `,
  },
];

const plans = [
  {
    duration: "1 month",
    cost: 2499,
    desc: ` Try our gym risk-free with a one-month plan. See the results
      for yourself and then choose a longer membership
    `,
  },
  {
    duration: "3 months",
    cost: 4999,
    desc: `For real body change, commit to a three-month gym plan. Give
      yourself time to see results and make lasting progress
    `,
  },
  {
    duration: "6 months",
    cost: 6999,
    desc: `Transform your body with our six-month gym plan. This extended
      commitment allows for even greater progress towards achieving
      your fitness goals
    `,
  },
  {
    featured: true,
    duration: "12 months",
    cost: 9999,
    desc: ` Make a lasting commitment to your health and wellness with our
      annual gym plan. Enjoy the perks of FREE diet and nutrition
      guidance
    `,
  },
];

const reviews = [
  {
    avatar: "/images/avatars/dominic.png",
    username: "Dominic Thirshatha",
    comment: `The best gym owner along with some great trainers. Perfect
      combination of equipments and he adds something new to the
      gym every month. A best place to workout and socialise as
      well.
    `,
  },
  {
    avatar: "/images/avatars/meenaz.png",
    username: "Meenaz M",
    comment: `The gym is very beginner-friendly and the equipments are well
      maintained, and are the space is hygienic. The trainers are also very
      friendly and approachable.
    `,
  },
  {
    avatar: "/images/avatars/jagan.png",
    username: "Jagan Saravanan",
    comment: `Best Gym I would say. I have been experiencing this gym for past
      4 months. Ambience and gym equipments are really cool. Trainers like Manish,
      Gokul, Selva are well experienced and will give guidance as required. I
      would recommend this gym for the fitness freaks. Stay fit and be healthy 🙂
    `,
  },
];

export default function Home() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const onPrevReview = () => {
    setReviewIndex((i) => (i !== 0 ? i - 1 : reviews.length - 1));
  };

  const onNextReview = () => {
    setReviewIndex((i) => (i !== reviews.length - 1 ? i + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(onNextReview, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AppLayout>
      <main id="home">
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

          <div className="container">
            {programs.map((item, i) => (
              <Program key={i} index={i} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        <section className="section" id="section--2">
          <div className="container">
            <span className="subheading">MEMBERSHIP</span>
            <p className="heading-secondary">
              Become a member by availing one of these plans
            </p>
          </div>

          <div className="plans-container container grid grid--4-cols margin-bottom-md">
            {plans.map((item, i) => (
              <Plan
                key={i}
                cost={item.cost}
                desc={item.desc}
                duration={item.duration}
                featured={item.featured ?? false}
              />
            ))}
          </div>
        </section>

        <section className="section" id="section--3">
          <div className="container">
            <span className="subheading">TESTIMONIALS</span>
            <p className="heading-secondary">Reviews of our gym members</p>

            <div className="slider">
              {reviews.map((item, i) => (
                <Review
                  key={i}
                  style={{
                    transform: `translateX(${(i - reviewIndex) * 100}%)`,
                  }}
                  avatar={item.avatar}
                  comment={item.comment}
                  username={item.username}
                />
              ))}

              <button
                className="slider__btn slider__btn--left"
                onClick={onPrevReview}
              >
                <ion-icon name="chevron-back" />
              </button>
              <button
                className="slider__btn slider__btn--right"
                onClick={onNextReview}
              >
                <ion-icon name="chevron-forward" />
              </button>
              <div className="dots"></div>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
