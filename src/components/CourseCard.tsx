import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "/public/assets/images/LearningQuraan.png";

const CourseCard = ({ course }) => {
  const [hover, setHover] = useState(false);
  console.log(course);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative max-w-xs overflow-hidden rounded-lg shadow-lg group max-h-80 min-h-40 h-72 w-72 bg-red-base"
      style={{ aspectRatio: "1 / 1.1" }}
    >
      {/* Zooming Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ scale: 1 }}
        animate={hover ? { scale: 1.2 } : { scale: 1 }}
        transition={{
          duration: hover ? 5 : 0.5,
          ease: hover ? "easeInOut" : "easeOut",
        }}
      />

      {/* Dark Permanent Bottom Background */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black"></div>

      {/* Black Overlay on Hover */}
      {/* <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }} // No dimming at start
        animate={hover ? { opacity: 0.5 } : { opacity: 0 }} // Adds a dim overlay on hover
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      /> */}

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 hover:bg-black-dark hover:bg-opacity-50">
        <div className="absolute bottom-[30%] gap-4 justify-start items-start">
          {/* Tag */}
          <motion.span
            initial={{ y: 80 }}
            animate={hover ? { y: 0 } : { y: 80 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: hover ? 0 : 0.3,
            }}
            className="block p-0 text-sm font-medium bg-primary self-start w-20 mx-auto text-white px-3 py-1 rounded-lg mb-2"
          >
            Courses
          </motion.span>

          {/* Heading */}
          <motion.h2
            // initial={{ top: "70%" }}
            animate={hover ? { y: 0 } : { y: 80 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: hover ? 0 : 0.2,
            }}
            className="text-2xl font-bold text-white font-serif bg-black-dark bg-opacity-30 "
          >
            {course?.name}
          </motion.h2>
        </div>

        {/* Hidden Content */}
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={hover ? { y: 0, opacity: 1 } : { opacity: 0, y: 100 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: hover ? 0 : 0.1,
          }}
          className=" text-sm text-white text-start"
        >
          {course.content}
        </motion.p>
      </div>
    </div>
  );
};

export default CourseCard;
