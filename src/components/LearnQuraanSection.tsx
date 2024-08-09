import React from "react";

const LearnQuranSection: React.FC = () => {
  return (
    <section className="py-12 px-2  bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/2 p-2 flex justify-end">
          <img
            src="/public/assets/images/LearningQuraan.png"
            alt="Quran Learning"
            className="rounded-lg shadow-2xl w-full lg:w-[90%] h-auto lg:max-h-[27rem]"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 mt-4 lg:mt-0 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold leading-tight">
            Learn Quran with Tajweed and Maakhiz
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Our Quran classes are designed to help you recite the Quran with
            proper Tajweed and Maakhiz. Learn from experienced Hafiz-e-Quran
            instructors who are dedicated to providing high-quality education.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-lg md:text-xl text-gray-700">
              • Experienced Hafiz-e-Quran instructors
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              • Focus on Tajweed and Maakhiz
            </li>
            <li className="text-lg md:text-xl text-gray-700">
              • Interactive and engaging lessons
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LearnQuranSection;
