import React, { useRef } from "react";
import Header from "../components/Header";

const AboutUs = () => {
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);
  return (
    <div className="min-h-screen flex flex-col bg-gray-extra">
      {/* Header */}
      <Header
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
        faqRef={faqRef}
      />
      <header className="bg-primary text-white p-4 ">
        <div className="container mx-auto flex items-center justify-center">
          <h1 className="text-3xl font-bold font-serif ">About Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 ">
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold text-primary mb-6">Who We Are</h2>
          <p className="text-lg text-gray-bg mb-6">
            We are a team of dedicated professionals committed to providing
            top-quality services to our clients.
          </p>
          <p className="text-lg text-gray-bg mb-6">
            Our mission is to deliver innovative solutions that help businesses
            achieve their goals.
          </p>
        </section>

        <section className="flex flex-wrap justify-around py-12">
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-bg">
                To be the leading provider of exceptional services and
                innovative solutions in our industry.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-bg">
                To empower businesses with the tools and expertise they need to
                succeed in a competitive market.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Values
              </h3>
              <p className="text-gray-bg">
                Integrity, Innovation, and Excellence are at the core of
                everything we do.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-bg p-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Allamal Qur'aan. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
