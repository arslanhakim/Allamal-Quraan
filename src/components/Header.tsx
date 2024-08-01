import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface HeaderProps {
  contactRef: React.MutableRefObject<null>;
  aboutUsRef: React.MutableRefObject<null>;
  coursesRef: React.MutableRefObject<null>;
  instructorsRef: React.MutableRefObject<null>;
  faqRef: React.MutableRefObject<null>;
}

const Header: React.FC<HeaderProps> = ({
  contactRef,
  aboutUsRef,
  coursesRef,
  instructorsRef,
  faqRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref: React.MutableRefObject<null>) => {
    if (ref && ref.current) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setScrolled(heroBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const css = `navbar-option group cursor-pointer font-semibold ${
    scrolled
      ? "text-white hover:text-white"
      : "text-primary hover:text-primary "
  }`;
  const css2 =
    "block py-2 px-4 text-white navbar-option group hover:text-primary border-x-0 border-b border-primary";

  const menuClasses = `md:hidden flex-col fixed w-full font-bold bg-[#844204] bg-opacity-90 transition-transform duration-300 ${
    isOpen ? "slide-down" : "slide-up"
  }`;

  return (
    <header
      className={`sticky top-0 w-full z-40 overflow-hidden  ${
        scrolled ? "bg-primary" : "bg-white"
      }`}
      style={
        {
          "--line-color": scrolled ? "#FFFFFF" : "#601929",
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-3 py-1 flex justify-between items-center">
        <Link to="/">
          <img
            src="/assets/images/logo-removebg-preview.png"
            alt="Logo"
            className="h-16 w-auto "
          />
        </Link>
        <nav className="hidden md:flex space-x-10 text-xl font-bold">
          <Link
            to="/about-us"
            onClick={() => {
              scrollToSection(aboutUsRef);
              handleMenuToggle();
            }}
            className={`${css} `}
          >
            About Us
          </Link>
          <p onClick={() => scrollToSection(coursesRef)} className={`${css}  `}>
            Courses
          </p>
          <p
            onClick={() => scrollToSection(instructorsRef)}
            className={`${css}`}
          >
            Instructors
          </p>
          <p onClick={() => scrollToSection(faqRef)} className={`${css}`}>
            FAQs
          </p>
        </nav>
        <button
          onClick={() => scrollToSection(contactRef)}
          className={`hidden md:block py-1 px-6 font-bold rounded-full hover:bg-opacity-90 hover:scale-95 transition-all duration-1000 ease-in-out font-serif ${
            scrolled ? "bg-white text-primary " : "bg-primary text-white"
          }`}
        >
          Contact Us
        </button>
        <button
          className="md:hidden bg-primary outline-none border-0"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <nav
        className={menuClasses}
        // className={`md:hidden  z-50 w-full bg-gray-200 bg-[#844204] py-6 text-white bg-opacity-95 transform transition-transform duration-500 ${
        //   isOpen ? "slide-down" : "slide-up"
        // }`}
      >
        <p
          onClick={() => {
            scrollToSection(aboutUsRef);
            handleMenuToggle();
          }}
          className={`${css2} `}
        >
          About Us
        </p>
        <p
          onClick={() => {
            scrollToSection(coursesRef);
            handleMenuToggle();
          }}
          className={`${css2}`}
        >
          Courses
        </p>
        <p
          onClick={() => {
            scrollToSection(instructorsRef);
            handleMenuToggle();
          }}
          className={`${css2}`}
        >
          Instructors
        </p>
        <p
          onClick={() => {
            scrollToSection(faqRef);
            handleMenuToggle();
          }}
          className={`${css2}`}
        >
          FAQs
        </p>
        <div className="flex justify-center ">
          <button
            onClick={() => {
              scrollToSection(contactRef);
              handleMenuToggle();
            }}
            className={`my-6 flex place-self-center shadow-2xl font-serif shadow-black-dark bg-primary text-white hover:bg-white hover:text-primary font-bold py-1 px-6 rounded-full hover:bg-opacity-90 hover:scale-95 transition-all duration-1000 ease-in-out
              
            `}
          >
            Contact Us
          </button>
        </div>
        {/* <p
          onClick={() => {
            scrollToSection(contactRef);
            handleMenuToggle();
          }}
          className={`${css2}`}
        >
          Contact Us
        </p> */}
      </nav>
    </header>
  );
};

export default Header;
