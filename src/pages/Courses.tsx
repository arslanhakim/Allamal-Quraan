import React, { useRef } from "react";
import Header from "../components/Header";

const Courses = () => {
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);
  return (
    <>
      <div className="min-w-screen h-screen w-full maxWidth-full lg:px-6 pb-12 lg:py-12 bg-gray-extra text-black-dark text-center top-0">
        <Header
          contactRef={contactRef}
          aboutUsRef={aboutUsRef}
          coursesRef={coursesRef}
          instructorsRef={instructorsRef}
          faqRef={faqRef}
        />
      </div>
    </>
  );
};

export default Courses;
