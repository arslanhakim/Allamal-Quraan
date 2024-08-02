import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, []);

  const data = [
    {
      title: "Our Vision and Values",
      description:
        "ALLAMAL QURAAN is guided by a vision of making the timeless wisdom of the Quran accessible to all. We believe in fostering an environment that promotes peace, understanding, and spiritual growth. Our values are rooted in the principles of Islam, and we strive to embody these in every aspect of our academy. We have a dream to make Islamic education easily accessible in areas often referred to as non-Muslim states, particularly in Europe, America, Canada, and Australia. Through our efforts, we aim to nurture a community of learners who are well-versed in the Quran and committed to living its teachings.",
    },
    {
      title: "Our Distinguished Faculty",
      description:
        "At the core of ALLAMAL QURAAN is our team of highly qualified and experienced educators. Our faculty members are distinguished not only for their deep understanding of Quranic studies but also for their proven communication skills. Each instructor is dedicated to delivering clear, engaging, and insightful lessons that cater to the diverse needs of our students. Moreover, our team is equally proficient in contemporary education and Islamic studies, comprising professionals such as doctors and engineers who teach the Quran out of passion. Their diverse expertise and enthusiasm for teaching create an environment where students feel supported and motivated to excel",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full flex flex-col bg-gray-extra text-black-dark">
      {/* Header */}
      <Header
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
        faqRef={faqRef}
      />
      {/* <header className="bg-primary text-white p-4 ">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-3xl font-bold font-serif ">About Us</h1>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 ">
        <section className="text-center pt-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold text-center mb-8 text-primary font-serif"
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-6 mx-6 lg:px-28"
          >
            Greetings from ALLAMAL QURAAN, where our commitment to Quranic
            education ensures unparalleled quality and significant impact. Our
            goal is to offer a transformative educational experience, enabling
            students to develop a deep connection with the teachings of the Holy
            Quran and incorporate its wisdom into their everyday lives.
          </motion.p>
        </section>

        <section className="flex flex-col justify-around py-12 gap-10 w-full">
          {/* {data.map((val, id) => (
            <motion.div
              className={`flex w-full ${
                id % 2 === 0 ? "justify-start" : "justify-end"
              }`}
              key={id}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: id * 0.3 }}
            >
              <div
                className={`w-full lg:w-5/6 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 ${
                  id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <h3 className="text-2xl text-justify font-bold text-primary case font-serif flex items-center justify-center">
                  {val.title}
                </h3>
                <p className="text-gray-bg text-justify">{val.description}</p>
              </div>
            </motion.div>
          ))} */}
          {data.map((val, id) => (
            <AnimatedItem
              key={id}
              id={id}
              title={val.title}
              description={val.description}
            />
          ))}
          <motion.div
            className={`flex w-full justify-start`}
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div
              className={`w-full lg:w-5/6 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 `}
            >
              <h3 className="text-2xl text-justify font-bold text-primary case font-serif flex items-center justify-center">
                Comprehensive Learning Programs
              </h3>
              <div>
                <p className="text-gray-bg text-justify">
                  We offer a wide range of programs designed to suit learners at
                  every stage of their Quranic journey. From foundational
                  courses for beginners to advanced studies for those seeking
                  deeper knowledge, our curriculum is thoughtfully crafted to
                  ensure a thorough and enriching educational experience. Our
                  programs incorporate traditional methods and modern teaching
                  techniques, providing a balanced and comprehensive approach to
                  Quranic education.
                </p>
                <p>Generally, we will be focusing on,</p>
                <ul>
                  <li>
                    <span className="text-primary text-xl font-bold">•</span>
                    Quran (Nazra & Hifz)
                  </li>
                  <li>
                    <span className="text-primary text-xl font-bold">•</span>
                    Basic Islamic Knowledge
                  </li>
                  <li>
                    <span className="text-primary text-xl font-bold">•</span> 40
                    Ahaadeeth (Sayings of Prophet MUHAMMAD pbuh)
                  </li>
                  <li>
                    <span className="text-primary text-xl font-bold">•</span>{" "}
                    Masnoon Duas (Prayers)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-bg p-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Allamal Qur'aan. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
const AnimatedItem = ({ id, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className={`flex w-full ${
        id % 2 === 0 ? "justify-start" : "justify-end"
      }`}
      ref={ref}
      initial={{ opacity: 0, x: id % 2 === 0 ? 80 : -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <div
        className={`w-full lg:w-5/6 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 ${
          id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <h3 className="text-2xl text-justify font-bold text-primary case font-serif flex items-center justify-center">
          {title}
        </h3>
        <p className="text-gray-bg text-justify">{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
