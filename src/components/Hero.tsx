import React from "react";
import bgImage from "../assets/images/hero-section-img.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black-dark bg-opacity-50 "></div>
      <div className="relative z-10 flex flex-col gap-10 items-center justify-center h-full text-center text-white ">
        <div>
          <h1 className="text-3xl font-bold text-center italic">Welcome to</h1>
          <h1 className="text-5xl font-bold font-serif">Allamal Qur'aan</h1>
          {/* <h1 className="text-5xl font-bold">عَلَّمَ اْلْقُرْآن</h1> */}
        </div>
        <p className="mt-4 md:w-[60%] mx-4 text-xl font-semibold">
          Join us to deepen your understanding of Islam through comprehensive
          online Quranic education and Islamic knowledge. Our expert instructors
          are here to guide you on your spiritual journey.
        </p>
      </div>
    </section>
  );
};

export default Hero;
