import React, { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Instructors from "../components/Instructors";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import LearnQuranSection from "../components/LearnQuraanSection";
import Courses from "../components/Courses";
import About_us from "../components/About_us";
import useIntersectionObserver from "../components/useIntersectionObserver";

const HomePage: React.FC = () => {
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);

  // Apply intersection observer to each section
  const heroRef = useIntersectionObserver("animate-slideUp");
  const aboutUsSectionRef = useIntersectionObserver("animate-slideUp");
  const learnQuranSectionRef = useIntersectionObserver("animate-slideUp");
  const coursesSectionRef = useIntersectionObserver("animate-slideUp");
  const instructorsSectionRef = useIntersectionObserver("animate-slideUp");
  const testimonialsSectionRef = useIntersectionObserver("animate-slideUp");
  const faqSectionRef = useIntersectionObserver("animate-slideUp");
  const contactFormSectionRef = useIntersectionObserver("animate-slideUp");

  return (
    <div className="w-full bg-gray-extra text-black-dark relative">
      <Header
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
        faqRef={faqRef}
      />

      <div ref={heroRef} className="animate-slideUp">
        <Hero />
      </div>
      <div ref={aboutUsSectionRef} className="animate-slideUp">
        <About_us />
      </div>
      <div ref={learnQuranSectionRef} className="animate-slideUp">
        <LearnQuranSection />
      </div>
      <div ref={coursesSectionRef} className="animate-slideUp">
        <Courses coursesRef={coursesRef} />
      </div>
      <div ref={instructorsSectionRef} className="animate-slideUp">
        <Instructors instructorsRef={instructorsRef} />
      </div>
      <div ref={testimonialsSectionRef} className="animate-slideUp">
        <Testimonials />
      </div>
      <div ref={faqSectionRef} className="animate-slideUp">
        <FAQ faqRef={faqRef} />
      </div>
      <div ref={contactFormSectionRef} className="animate-slideUp">
        <ContactForm contactRef={contactRef} />
      </div>
      <Footer
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
        faqRef={faqRef}
      />
    </div>
  );
};

export default HomePage;
