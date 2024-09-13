// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { MdKeyboardArrowRight } from "react-icons/md";

// interface HeaderProps {
//   contactRef: React.MutableRefObject<null>;
//   aboutUsRef: React.MutableRefObject<null>;
//   coursesRef: React.MutableRefObject<null>;
//   instructorsRef: React.MutableRefObject<null>;
//   faqRef: React.MutableRefObject<null>;
// }

// const Header: React.FC<HeaderProps> = ({
//   contactRef,
//   aboutUsRef,
//   coursesRef,
//   instructorsRef,
//   faqRef,
// }) => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [hoveredItem, setHoveredItem] = useState<number | null>(null);
//   const [isCoursesHovered, setIsCoursesHovered] = useState(false);

//   const headerOpt = [
//     { title: "Home", link: "/" },
//     { title: "About Us", link: "/about-us" },
//     { title: "Courses", ref: coursesRef },
//     { title: "Pricing", link: "/pricing" },
//     { title: "Contact", ref: contactRef },
//     { title: "FAQs", ref: faqRef },
//   ];

//   const courses = [
//     { name: "Noorani Qaida", link: "/course-1" },
//     { name: "Basic Quran Reading", link: "/course-2" },
//     { name: "Quran with Tajweed", link: "/course-3" },
//     { name: "Memorizing Duas", link: "/course-3" },
//     { name: "Memorize Quran Online", link: "/course-3" },
//     { name: "Salat", link: "/course-3" },
//   ];

//   const handleMenuToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const scrollToSection = (ref: React.MutableRefObject<null>) => {
//     if (ref && ref.current) {
//       (ref.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false); // Close menu after scrolling
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.getElementById("hero-section");
//       if (heroSection) {
//         const heroBottom = heroSection.getBoundingClientRect().bottom;
//         setScrolled(heroBottom <= 0);
//       } else {
//         setScrolled(window.scrollY > 50);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const css = `navbar-option group cursor-pointer font-semibold ${
//     scrolled ? "text-white hover:text-white" : "text-primary hover:text-primary"
//   }`;

//   const css2 =
//     "block py-2 px-4 text-white navbar-option group hover:text-primary border-x-0 border-b border-primary";

//   const menuClasses = `${
//     isOpen ? "slide-down" : "slide-up"
//   } md:hidden flex-col fixed w-full font-bold bg-primary bg-opacity-90 transition-transform duration-300 `;

//   return (
//     <header
//       className={`sticky py-2 top-0 w-full z-40 overflow-visible ${
//         scrolled ? "bg-primary" : "bg-white"
//       }`}
//       style={
//         {
//           "--line-color": scrolled ? "#FFFFFF" : "#601929",
//         } as React.CSSProperties
//       }
//     >
//       <div className="container mx-auto px-3 py-1 flex justify-between items-center">
//         <Link to="/">
//           <motion.img
//             src="/assets/images/logo-removebg-preview.png"
//             alt="Logo"
//             className="h-16 w-auto"
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           />
//         </Link>
//         <nav className="hidden md:flex items-center space-x-6 text-lg font-semibold">
//           {headerOpt.map((header, key) => (
//             <div
//               key={key}
//               onMouseEnter={() => {
//                 setHoveredItem(key);
//                 if (header.title === "Courses") {
//                   setIsCoursesHovered(true);
//                 }
//               }}
//               onMouseLeave={() => {
//                 setHoveredItem(null);
//                 setIsCoursesHovered(false);
//               }}
//               className={`relative ${css} ${
//                 hoveredItem !== null && hoveredItem !== key
//                   ? "opacity-50"
//                   : "opacity-100"
//               }`}
//             >
//               {header.ref ? (
//                 <p onClick={() => scrollToSection(header.ref)}>
//                   {header.title}
//                 </p>
//               ) : (
//                 <p onClick={() => navigate(header.link || "/")}>
//                   {header.title}
//                 </p>
//               )}
//               {/* Courses Popover */}
//               {header.title === "Courses" &&
//                 (isCoursesHovered || hoveredItem === key) && (
//                   <div
//                     className="absolute top-full left-0 mt-0 w-72 bg-white shadow-lg rounded-md overflow-hidden z-50"
//                     onMouseEnter={() => setIsCoursesHovered(true)}
//                     onMouseLeave={() => setIsCoursesHovered(false)}
//                   >
//                     {courses.map((course, index) => (
//                       <Link
//                         key={index}
//                         to={course.link}
//                         className="block px-4 py-2 font-semibold text-base hover:bg-primary hover:text-white text-primary transition"
//                       >
//                         {course.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//             </div>
//           ))}
//           <button
//             onClick={() => scrollToSection(contactRef)}
//             className={`hidden md:flex text-base items-center justify-between gap-2 py-1 px-6 font-bold rounded-full hover:bg-opacity-90 hover:scale-95 transition-all duration-1000 ease-in-out font-serif ${
//               scrolled ? "bg-white text-primary " : "bg-primary text-white"
//             } animate-heartbeat`}
//           >
//             Enroll Now{" "}
//             <span className="p-1 rounded-full h-auto">
//               <MdKeyboardArrowRight
//                 className="inline-block self-center"
//                 size={25}
//               />
//             </span>
//           </button>
//         </nav>
//         <button
//           className="md:hidden bg-primary outline-none border-0"
//           onClick={handleMenuToggle}
//         >
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             />
//           </svg>
//         </button>
//       </div>
//       <nav className={menuClasses}>
//         <Link
//           to="/about-us"
//           onClick={() => {
//             scrollToSection(aboutUsRef);
//             handleMenuToggle();
//           }}
//           className={`${css2}`}
//         >
//           About Us
//         </Link>
//         <Link to="/courses" onClick={handleMenuToggle} className={`${css2}`}>
//           Courses
//         </Link>
//         <p
//           onClick={() => {
//             scrollToSection(instructorsRef);
//             handleMenuToggle();
//           }}
//           className={`${css2}`}
//         >
//           Instructors
//         </p>
//         <p
//           onClick={() => {
//             scrollToSection(faqRef);
//             handleMenuToggle();
//           }}
//           className={`${css2}`}
//         >
//           FAQs
//         </p>
//         <div className="flex justify-center ">
//           <button
//             onClick={() => {
//               scrollToSection(contactRef);
//               handleMenuToggle();
//             }}
//             className={`animate-heartbeat my-6 flex place-self-center shadow-2xl font-serif shadow-black-dark bg-white text-primary font-bold py-1 px-6 rounded-full hover:bg-opacity-90 hover:scale-95 transition-all duration-1000 ease-in-out`}
//           >
//             Contact Us
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

// import React,{ useState } from "react";

// const Header = () => {
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed w-full top-0 z-10">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//         <div className="flex items-center">
//           <a href="#" className="text-xl font-bold text-primary">
//             Logo
//           </a>
//         </div>
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="hover:text-primary">
//             Home
//           </a>
//           <div className="relative">
//             <button
//               onMouseEnter={() => setIsCoursesOpen(true)}
//               onMouseLeave={() => setIsCoursesOpen(false)}
//               className="hover:text-primary"
//             >
//               Courses
//             </button>
//             {isCoursesOpen && (
//               <div
//                 onMouseEnter={() => setIsCoursesOpen(true)}
//                 onMouseLeave={() => setIsCoursesOpen(false)}
//                 className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg"
//               >
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm hover:bg-gray-100"
//                 >
//                   Web Development
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm hover:bg-gray-100"
//                 >
//                   Data Science
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm hover:bg-gray-100"
//                 >
//                   Design
//                 </a>
//               </div>
//             )}
//           </div>
//           <a href="#" className="hover:text-primary">
//             Pricing
//           </a>
//           <a href="#" className="hover:text-primary">
//             About
//           </a>
//           <a href="#" className="hover:text-primary">
//             Contact
//           </a>
//         </div>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-primary focus:outline-none"
//           >
//             {/* Hamburger Icon */}
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//             Home
//           </a>
//           <button
//             onClick={() => setIsCoursesOpen(!isCoursesOpen)}
//             className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             Courses
//           </button>
//           {isCoursesOpen && (
//             <div className="bg-white pl-6">
//               <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
//                 Web Development
//               </a>
//               <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
//                 Data Science
//               </a>
//               <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
//                 Design
//               </a>
//             </div>
//           )}
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//             Pricing
//           </a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//             About
//           </a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//             Contact
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showMobileCourses, setShowMobileCourses] = useState(false);

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
    { name: "Memorizing Duas", link: "/course-4" },
    { name: "Memorize Quran Online", link: "/course-5" },
    { name: "Salat", link: "/course-6" },
  ];

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    setShowMobileCourses(false); // Ensure courses are hidden when toggling menu
  };

  const closeMenu = () => {
    console.log("Closing Menu"); // Debugging line to confirm function call
    setIsOpen(false);
    setShowMobileCourses(false); // Ensure courses are hidden when menu closes
  };

  const scrollToSection = (ref: React.MutableRefObject<null>) => {
    if (ref && ref.current) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
      closeMenu();
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

  const menuStyles = {
    transform: isOpen ? "translateY(0)" : "translateY(-200%)",
    transition: "transform 0.3s ease-in-out",
  };
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
        <Link to="/" onClick={closeMenu}>
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
                        onClick={closeMenu}
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
      <nav className={menuClasses} style={menuStyles}>
        <Link
          to="/about-us"
          onClick={() => {
            scrollToSection(aboutUsRef);
            closeMenu();
          }}
          className={`${css2}`}
        >
          About Us
        </Link>
        <div
          onClick={() => setShowMobileCourses(!showMobileCourses)}
          className={`cursor-pointer ${css2}`}
        >
          Courses
          <span className="inline-block ml-2">
            <MdKeyboardArrowRight
              size={20}
              className={`transition-transform duration-300 ${
                showMobileCourses ? "rotate-90" : ""
              }`}
            />
          </span>
        </div>
        {/* Mobile Courses Animation */}
        <AnimatePresence>
          {showMobileCourses && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {courses.map((course, index) => (
                <Link
                  key={index}
                  to={course.link}
                  className="block pl-6 py-2 text-white hover:text-primary transition"
                  onClick={closeMenu}
                >
                  {course.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <p
          onClick={() => {
            scrollToSection(contactRef);
            closeMenu();
          }}
          className={`${css2}`}
        >
          Contact
        </p>
        <Link to="/pricing" onClick={closeMenu} className={`${css2}`}>
          Pricing
        </Link>
        <p
          onClick={() => {
            scrollToSection(faqRef);
            closeMenu();
          }}
          className={`${css2}`}
        >
          FAQs
        </p>
        <Link
          to="/enroll"
          onClick={closeMenu}
          className="px-6 py-2 text-white hover:text-primary border-x-0 border-b border-primary"
        >
          Enroll Now
        </Link>
      </nav>
    </header>
  );
};

export default Header;
