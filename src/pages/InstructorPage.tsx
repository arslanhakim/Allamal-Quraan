import React, { useRef } from "react";
import Header from "../components/Header";

const instructors = [
  {
    name: "Dr. Ahmed Khan",
    title: "Islamic Scholar",
    description:
      "Dr. Ahmed Khan is a renowned Islamic scholar with over 20 years of teaching experience.",
    image: "/assets/instructor1.jpg",
  },
  {
    name: "Hafiz Ali Raza",
    title: "Quran Instructor",
    description:
      "Hafiz Ali Raza has memorized the entire Quran and specializes in teaching Tajweed.",
    image: "/assets/instructor2.jpg",
  },
  {
    name: "Dr. Fatima Zahra",
    title: "Islamic Studies Professor",
    description:
      "Dr. Fatima Zahra holds a PhD in Islamic Studies and has published numerous research papers.",
    image: "/assets/instructor3.jpg",
  },
  {
    name: "Sheikh Omar Abdullah",
    title: "Senior Imam",
    description:
      "Sheikh Omar Abdullah is a senior Imam with extensive knowledge in Fiqh and Hadith.",
    image: "/assets/instructor4.jpg",
  },
];

const Instructors: React.FC = () => {
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);
  return (
    <section className="py-12 bg-gray-100">
      <Header
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
      />
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Expert Instructors</h2>
        <p className="mb-12">
          Meet our team of qualified Hafiz-e-Quran, doctors, and scholars.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-56 object-cover"
                src={instructor.image}
                alt={instructor.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{instructor.name}</h3>
                <p className="text-gray-600">{instructor.title}</p>
                <p className="mt-4 text-gray-700">{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
