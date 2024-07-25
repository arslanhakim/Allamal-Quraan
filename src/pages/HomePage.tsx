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

const HomePage: React.FC = () => {
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);
  return (
    <div className="w-full bg-gray-extra text-black-dark relative">
      <Header
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
      />
      <Hero />
      <LearnQuranSection />
      <Courses coursesRef={coursesRef} />
      <Instructors instructorsRef={instructorsRef} />
      <Testimonials />
      <FAQ faqRef={faqRef} />
      <ContactForm contactRef={contactRef} />
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
