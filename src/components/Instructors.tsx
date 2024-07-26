import React from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const instructors = [
  {
    name: "Dr. Ahmed Khan",
    title: "Islamic Scholar",
    description:
      "Dr. Ahmed Khan is a renowned Islamic scholar with over 20 years of teaching experience.",
    image: "/public/assets/images/Instructor 1.jpg",
  },
  {
    name: "Hafiz Ali Raza",
    title: "Quran Instructor",
    description:
      "Hafiz Ali Raza has memorized the entire Quran and specializes in teaching Tajweed.",
    image: "/public/assets/images/Instructor 2.jpg",
  },
  {
    name: "Dr. Fatima Zahra",
    title: "Islamic Studies Professor",
    description:
      "Dr. Fatima Zahra holds a PhD in Islamic Studies and has published numerous research papers.",
    image: "/public/assets/images/Instructor 3.jpg",
  },
  {
    name: "Sheikh Omar Abdullah",
    title: "Senior Imam",
    description:
      "Sheikh Omar Abdullah is a senior Imam with extensive knowledge in Fiqh and Hadith.",
    image: "/public/assets/images/Instructor 4.jpg",
  },
];

interface InstructorsProps {
  instructorsRef: React.MutableRefObject<null>;
}

const Instructors: React.FC<InstructorsProps> = ({ instructorsRef }) => {
  return (
    <section className="md:py-12 px-4 bg-gray-100" ref={instructorsRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Expert Instructors</h2>
        <p className="mb-12">
          Meet our team of qualified Hafiz-e-Quran, doctors, and scholars.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-2"
            >
              <img
                className="w-full h-56 object-cover rounded-lg shadow-gray-normal drop-shadow-xl "
                src={instructor.image}
                alt={instructor.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 font-serif">
                  {instructor.name}
                </h3>
                <p className="text-gray-600 font-semibold italic">
                  {instructor.title}
                </p>
                <p className="mt-4 text-gray-700">{instructor.description}</p>
              </div>
              <div className="mb-4  flex items-center justify-center w-auto">
                <div className="bg-black-dark rounded-sm p-1 cursor-pointer">
                  <Link to="">
                    <PiLinkedinLogoBold size={25} className=" text-white" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
