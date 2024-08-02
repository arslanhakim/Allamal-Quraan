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
  const heroRef = useIntersectionObserver("animate-slide_Up");
  const aboutUsSectionRef = useIntersectionObserver("animate-slide_Up");
  const learnQuranSectionRef = useIntersectionObserver("animate-slide_Up");
  const coursesSectionRef = useIntersectionObserver("animate-slide_Up");
  const instructorsSectionRef = useIntersectionObserver("animate-slide_Up");
  const testimonialsSectionRef = useIntersectionObserver("animate-slide_Up");
  const faqSectionRef = useIntersectionObserver("animate-slide_Up");
  const contactFormSectionRef = useIntersectionObserver("animate-slide_Up");

  return (
    <div className="w-full bg-gray-extra text-black-dark relative">
      <Header
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
        faqRef={faqRef}
      />

      {/* <div ref={heroRef} className="animate-slide_Up"> */}
      <Hero />
      {/* </div> */}
      <div ref={aboutUsSectionRef} className="animate-slide_Up">
        <About_us />
      </div>
      <div ref={learnQuranSectionRef} className="animate-slide_Up">
        <LearnQuranSection />
      </div>
      <div ref={coursesSectionRef} className="animate-slide_Up">
        <Courses coursesRef={coursesRef} />
      </div>
      <div ref={instructorsSectionRef} className="animate-slide_Up">
        <Instructors instructorsRef={instructorsRef} />
      </div>
      <div ref={testimonialsSectionRef} className="animate-slide_Up">
        <Testimonials />
      </div>
      <div ref={faqSectionRef} className="animate-slide_Up">
        <FAQ faqRef={faqRef} />
      </div>
      <div ref={contactFormSectionRef} className="animate-slide_Up">
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
