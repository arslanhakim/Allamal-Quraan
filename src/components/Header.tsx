import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false);

  const headerOpt = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "Courses", ref: coursesRef },
    { title: "Pricing", link: "/pricing" },
    { title: "Contact", ref: contactRef },
    { title: "FAQs", ref: faqRef },
  ];

  const courses = [
    { name: "Noorani Qaida", link: "/course-1" },
    { name: "Basic Quran Reading", link: "/course-2" },
    { name: "Quran with Tajweed", link: "/course-3" },
    { name: "Memorizing Duas", link: "/course-3" },
    { name: "Memorize Quran Online", link: "/course-3" },
    { name: "Salat", link: "/course-3" },
  ];

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
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const css = `navbar-option group cursor-pointer font-semibold ${
    scrolled ? "text-white hover:text-white" : "text-primary hover:text-primary"
  }`;

  const css2 =
    "block py-2 px-4 text-white navbar-option group hover:text-primary border-x-0 border-b border-primary";

  const menuClasses = `${
    isOpen ? "slide-down" : "slide-up"
  } md:hidden flex-col fixed w-full font-bold bg-primary bg-opacity-90 transition-transform duration-300 `;

  return (
    <header
      className={`sticky py-2 top-0 w-full z-40 overflow-visible ${
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
          <motion.img
            src="/assets/images/logo-removebg-preview.png"
            alt="Logo"
            className="h-16 w-auto"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-lg font-semibold">
          {headerOpt.map((header, key) => (
            <div
              key={key}
              onMouseEnter={() => {
                setHoveredItem(key);
                if (header.title === "Courses") {
                  setIsCoursesHovered(true);
                }
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
                setIsCoursesHovered(false);
              }}
              className={`relative ${css} ${
                hoveredItem !== null && hoveredItem !== key
                  ? "opacity-50"
                  : "opacity-100"
              }`}
            >
              {header.ref ? (
                <p onClick={() => scrollToSection(header.ref)}>
                  {header.title}
                </p>
              ) : (
                <p onClick={() => navigate(header.link || "/")}>
                  {header.title}
                </p>
              )}
              {/* Courses Popover */}
              {header.title === "Courses" &&
                (isCoursesHovered || hoveredItem === key) && (
                  <div
                    className="absolute top-full left-0 mt-0 w-72 bg-white shadow-lg rounded-md overflow-hidden z-50"
                    onMouseEnter={() => setIsCoursesHovered(true)}
                    onMouseLeave={() => setIsCoursesHovered(false)}
                  >
                    {courses.map((course, index) => (
                      <Link
                        key={index}
                        to={course.link}
                        className="block px-4 py-2 font-semibold text-base hover:bg-primary hover:text-white text-primary transition"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
          <button
            onClick={() => scrollToSection(contactRef)}
            className={`hidden md:flex text-base items-center justify-between gap-2 py-1 px-6 font-bold rounded-full hover:bg-opacity-90 hover:scale-95 transition-all duration-1000 ease-in-out font-serif ${
              scrolled ? "bg-white text-primary " : "bg-primary text-white"
            } animate-heartbeat`}
          >
            Enroll Now{" "}
            <span className="p-1 rounded-full h-auto">
              <MdKeyboardArrowRight
                className="inline-block self-center"
                size={25}
              />
            </span>
          </button>
        </nav>
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
      <nav className={menuClasses}>
        <Link
          to="/about-us"
          onClick={() => {
            scrollToSection(aboutUsRef);
            handleMenuToggle();
          }}
          className={`${css2}`}
        >
          About Us
        </Link>
        <Link to="/courses" onClick={handleMenuToggle} className={`${css2}`}>
          Courses
        </Link>
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
            className={`animate-heartbeat my-6 flex place-self-center shadow-2xl font-serif shadow-black-dark bg-white text-primary font-bold py-1 px-6 rounded-full hover:bg-opacity-90 hover:scale-95 transition-all duration-1000 ease-in-out`}
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
