import React, { useState, useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";

const About_us = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleReadMoreToggle = () => {
    setIsReadMore(!isReadMore);
  };

  const fullText = `
    ALLAMAL QURAAN is guided by a vision of making the timeless wisdom of the Quran accessible to all.
    We believe in fostering an environment that promotes peace, understanding, and spiritual growth.
    Our values are rooted in the principles of Islam, and we strive to embody these in every aspect of our academy.
    We have a dream to make Islamic education easily accessible in areas often referred to as non-Muslim states,
    particularly in Europe, America, Canada, and Australia. Through our efforts, we aim to nurture a community of learners
    who are well-versed in the Quran and committed to living its teachings.
  `;

  const shortText = `
    ALLAMAL QURAAN is guided by a vision of making the timeless wisdom of the Quran accessible to all.
    We believe in fostering an environment that promotes peace, understanding, and spiritual growth. ...
  `;

  return (
    <motion.section
      className="py-16 bg-gray-100 mx-2"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-center mb-6 mx-6 lg:px-28">
          Greetings from ALLAMAL QURAAN, where our commitment to Quranic
          education ensures unparalleled quality and significant impact. Our
          goal is to offer a transformative educational experience, enabling
          students to develop a deep connection with the teachings of the Holy
          Quran and incorporate its wisdom into their everyday lives.
        </p>

        <main className="flex-grow container mx-auto">
          <section className="flex flex-wrap justify-around">
            <div className="w-full lg:w-5/6 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <h3 className="text-2xl font-bold text-primary case text-center font-serif flex items-center justify-center">
                Our Vision And Values
              </h3>
              <p className="">
                {isSmallScreen && !isReadMore ? shortText : fullText}
                {isSmallScreen && fullText.split(" ").length > 100 && (
                  <span
                    onClick={handleReadMoreToggle}
                    className="text-primary hover:underline ml-2 cursor-pointer"
                  >
                    {isReadMore ? "Read Less" : "Read More"}
                  </span>
                )}
              </p>
            </div>
          </section>
        </main>
      </div>
    </motion.section>
  );
};

export default About_us;

{
  /* <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-extra p-6">
        <div className="group relative w-64 h-80 m-4 bg-white shadow-lg overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          <div className="absolute inset-0 bg-black-dark bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-white text-xl font-bold">Arslan here</h3>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-gray-800">wow what a descrpigoihib</p>
          </div>
        </div>
      </div> */
}
