import { useEffect } from "react";

export default function useSectionTransition() {
  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  useEffect(() => {
    const allSections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach((sec) => {
      observer.observe(sec);
      sec.classList.add("section--hidden");
    });
    return () => {
      observer.disconnect();
    };
  }, []);
}
