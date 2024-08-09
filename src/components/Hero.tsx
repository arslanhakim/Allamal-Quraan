import React from "react";
import bgImage from "/public/assets/images/hero-section-img.jpg";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative h-screen max-h-[70vh] sm:max-h-[60vh] lg:max-h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black-dark bg-opacity-50 "></div>
      <div className="relative z-10 flex flex-col gap-10 items-center justify-center h-full text-center text-white ">
        <div>
          <motion.h4
            className="text-3xl font-bold text-center italic"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Welcome to
          </motion.h4>
          <motion.h1
            className="text-5xl font-bold font-serif"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Allamal Qur'aan
          </motion.h1>
          {/* <h1 className="text-5xl font-bold">عَلَّمَ اْلْقُرْآن</h1> */}
        </div>
        <motion.p
          className="mt-4 md:w-[60%] mx-4 text-xl font-semibold"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Join us to deepen your understanding of Islam through comprehensive
          online Quranic education and Islamic knowledge. Our expert instructors
          are here to guide you on your spiritual journey.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
