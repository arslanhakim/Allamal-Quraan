import React, { useRef } from "react";
import Header from "./Header";
import { motion } from "framer-motion";

const About_us = () => {
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
          <section className="flex flex-wrap justify-around ">
            <div className="w-full lg:w-5/6 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 ">
              <h3 className="text-2xl  font-bold text-primary case text-center font-serif flex items-center justify-center">
                Our Vision And Values
              </h3>
              <p className="text-gray-bg">
                ALLAMAL QURAAN is guided by a vision of making the timeless
                wisdom of the Quran accessible to all. We believe in fostering
                an environment that promotes peace, understanding, and spiritual
                growth. Our values are rooted in the principles of Islam, and we
                strive to embody these in every aspect of our academy. We have a
                dream to make Islamic education easily accessible in areas often
                referred to as non-Muslim states, particularly in Europe,
                America, Canada, and Australia. Through our efforts, we aim to
                nurture a community of learners who are well-versed in the Quran
                and committed to living its teachings.
              </p>
            </div>
          </section>
        </main>
      </div>
    </motion.section>
  );
};

export default About_us;
