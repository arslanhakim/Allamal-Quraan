import React from "react";

const Courses = ({ coursesRef }) => {
  const courses = [
    {
      title: "Basic Knowledge of Islam",
      description:
        "Learn the fundamental principles of Islam, including the Five Pillars, the life of Prophet Muhammad (PBUH), and more.",
      buttonText: "Enroll Now",
      navigation: "/enroll",
      // image: "/assets/images/card-img-01.jpg",
      image: "/assets/images/children_with_Ustaza.png",
      pic: "",
    },
    {
      title: "Duas and Supplications",
      description:
        "Master the essential Duas and supplications for daily life, special occasions, and spiritual growth.",
      buttonText: "Join Class",
      navigation: "/join",
      image: "/assets/images/whole class.png",
    },
    {
      title: "Advanced Islamic Studies",
      description:
        "Dive deeper into Islamic jurisprudence, theology, and history with our advanced courses.",
      buttonText: "Learn More",
      navigation: "/learn-more",
      image: "/assets/images/childreninonerow.png",
    },
  ];
  return (
    <section className="py-16 bg-gray-100" ref={coursesRef}>
      <div className="container mx-auto px-6 ">
        <div className=" flex flex-col md:flex-row justify-center items-center md:justify-between mx-auto w-full md:w-3/4 mb-8">
          <h2 className="w-full text-4xl font-bold mb-8 md:mb-0 relative text-center md:text-left whitespace-normal">
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
          <p className="text-center text-lg mb-16 md:mb-0 font-medium font-mono md:text-start">
            We offer wide range of lessons to get your kids started with the
            online Quran classes and pave a way for them to excel in their Quran
            and Islamic Studies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-4/5 mx-auto">
          {courses.map((course, id) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-xl w-full h-full"
              // style={{ backgroundImage: `url(${course.image})` }}
            >
              <img
                src={course.image}
                alt="Basic Knowledge of Islam"
                className="max-h-64 w-full object-cover rounded-lg shadow-2xl"
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
