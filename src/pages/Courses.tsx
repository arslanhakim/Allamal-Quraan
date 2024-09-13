import React, { useRef } from "react";
import Header from "../components/Header";
import CourseComp from "../components/Courses";
import CourseCard from "../components/CourseCard";
import { availableCourses } from "../utils/data";

const Courses = () => {
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);
  console.log(availableCourses);
  return (
    <>
      <div className="min-w-screen h-full min-h-screen w-full lg:px-6 pb-12 lg:py-12 bg-gray-extra text-black-dark text-center top-0">
        <Header
          contactRef={contactRef}
          aboutUsRef={aboutUsRef}
          coursesRef={coursesRef}
          instructorsRef={instructorsRef}
          faqRef={faqRef}
        />
        <h1 className="font-serif mt-20">Courses</h1>
        <p className="mb-10">
          Holistic and easy to follow learning online Quran learning experience
          for everyone.
        </p>
        <div className=" flex flex-col md:flex-row justify-center items-center md:justify-between mx-auto w-full md:w-3/4 mb-8">
          <h2 className="w-full text-4xl font-medium font-serif mb-8 md:mb-0 relative text-center md:text-left whitespace-normal">
            Offered Courses
            {/* <div className="relative inline-block ">
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
           py-1 bg-gray-800 text-white text-sm rounded-3xl
          transition-opacity duration-1000 ease-in-out 
          animate-tooltip bg-green-chart px-10"
            >
              wow what a tooltip
            </div>
          </div> */}
          </h2>
          <p className="text-center text-lg mb-16 md:mb-0 font-medium font-serif md:text-start">
            We offer wide range of lessons to get your kids started with the
            online Quran classes and pave a way for them to excel in their Quran
            and Islamic Studies.
          </p>
        </div>

        {/* <CourseComp coursesRef={coursesRef} /> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto gap-10 items-center justify-center mt-10 w-[80%] ">
          {availableCourses?.map((course) => (
            // <span>{course.name}</span>
            <CourseCard course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
