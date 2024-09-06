import React from "react";
import { Link } from "react-router-dom";
interface HeaderProps {
  contactRef: React.MutableRefObject<null>;
  aboutUsRef: React.MutableRefObject<null>;
  coursesRef: React.MutableRefObject<null>;
  instructorsRef: React.MutableRefObject<null>;
  faqRef: React.MutableRefObject<null>;
}

const Footer = ({
  contactRef,
  aboutUsRef,
  coursesRef,
  instructorsRef,
  faqRef,
}) => {
  const css = "hover:underline text-white font-normal hover:text-white";

  const scrollToSection = (ref: React.MutableRefObject<null>) => {
    if (ref && ref.current) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-20 md:gap-8 px-4">
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-2 italic font-serif">
            Allamal Qur'aan
          </h3>
          <img
            src="/assets/images/logo-removebg-preview.png"
            className="bg-primary text-white h-24 animate-spin"
            alt="Allamal Qur'aan Logo"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul>
            <li className="mb-1 cursor-pointer">
              <p onClick={() => scrollToSection(aboutUsRef)} className={css}>
                About Us
              </p>
            </li>
            <li className="mb-1 cursor-pointer">
              <p onClick={() => scrollToSection(coursesRef)} className={css}>
                Courses
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Resources</h3>
          <ul>
            <li className="mb-1 cursor-pointer">
              <p
                onClick={() => scrollToSection(instructorsRef)}
                className={css}
              >
                Instructors
              </p>
            </li>
            <li className="mb-1 cursor-pointer">
              <p onClick={() => scrollToSection(faqRef)} className={css}>
                FAQ
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Support</h3>
          <ul>
            <li className="mb-1 cursor-pointer">
              {/* <button
                onClick={() => scrollToSection(contactRef)}
                className={css}
              >
                Contact Us
              </button> */}
              <p onClick={() => scrollToSection(contactRef)} className={css}>
                Contact Us
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Info</h3>
          <p className="mb-1">
            <a href="tel:+923048110114" className={css}>
              +92 304 811 0114
            </a>
          </p>
          <p className="mb-1 text-sm font-light">
            <a href="mailto:allamalquraan@hotmail.com" className={css}>
              allamalquraan@hotmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
