import React from "react";
import basicIslam from "/public/assets/images/card-img-01.jpg";

const Courses = ({ coursesRef }) => {
  const courses = [
    {
      title: "Basic Knowledge of Islam",
      description:
        "Learn the fundamental principles of Islam, including the Five Pillars, the life of Prophet Muhammad (PBUH), and more.",
      buttonText: "Enroll Now",
      navigation: "/enroll",
      image: { basicIslam },
      pic: "",
    },
    {
      title: "Duas and Supplications",
      description:
        "Master the essential Duas and supplications for daily life, special occasions, and spiritual growth.",
      buttonText: "Join Class",
      navigation: "/join",
      image: "/public/assets/images/card-img-02.jpg",
    },
    {
      title: "Advanced Islamic Studies",
      description:
        "Dive deeper into Islamic jurisprudence, theology, and history with our advanced courses.",
      buttonText: "Learn More",
      navigation: "/learn-more",
      image: "/public/assets/images/Advance Islamic studies.jpg",
    },
  ];
  return (
    <section className="py-16 bg-gray-100" ref={coursesRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore Our Comprehensive Islamic Courses
        </h2>
        <p className="text-center mb-16">
          Our Islamic courses cover a wide range of topics, including basic
          knowledge of Islam, Duas, and more. Each course is designed to be
          engaging and informative, helping you deepen your understanding of
          Islam.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, id) => (
            <div key={id} className="bg-white rounded-lg p-1 shadow-xl">
              <img
                src={course.image}
                alt="Basic Knowledge of Islam"
                className="h-50 w-full object-cover rounded-lg shadow-2xl"
              />
              <div className="px-4 pb-8">
                <h3 className="text-2xl font-bold mt-4">{course.title}</h3>
                <p className="mt-2">{course.description}</p>
                <a href="#" className="text-primary font-bold mt-8 block">
                  {course.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
