// useIntersectionObserver.js
import { useEffect, useRef } from "react";

const useIntersectionObserver = (animationClass, rootMargin = "0px") => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target); // Optionally unobserve after adding the class
          } else {
            entry.target.classList.remove(animationClass); // Optional: Remove class when out of view
          }
        });
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationClass, rootMargin]);

  return ref;
};

export default useIntersectionObserver;
