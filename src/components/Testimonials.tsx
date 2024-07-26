// import React, { useRef, useEffect } from "react";
// import "./Testimonials.css"; // Import the CSS file

// const testimonials = [
//   {
//     name: "John Doe",
//     review:
//       "This is the best school I have ever attended. The instructors are top-notch. This is the best school I have ever attended. The instructors are top-notch.This is the best school I have ever attended. The instructors are top-notch.",
//   },
//   {
//     name: "Jane Smith",
//     review: "I learned so much from the courses. Highly recommend!",
//   },
//   {
//     name: "Jane Smith",
//     review: "I learned so much from the courses. Highly recommend!",
//   },
//   // Add more testimonials as needed
// ];

// const Testimonials: React.FC = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const container = scrollContainerRef.current;
//       if (container) {
//         if (container.scrollLeft === 0) {
//           container.scrollLeft = container.scrollWidth / 2;
//         } else if (
//           container.scrollLeft + container.offsetWidth >=
//           container.scrollWidth
//         ) {
//           container.scrollLeft =
//             container.scrollWidth / 2 - container.offsetWidth;
//         }
//       }
//     };

//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//       container.scrollLeft = container.scrollWidth / 2;
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <section className="py-12 px-8 bg-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
//         <div className="relative">
//           <button onClick={scrollLeft} className="scroll-button left-0">
//             {"<"}
//           </button>
//           <div className="scroll-container" ref={scrollContainerRef}>
//             <div className="testimonial-list whitespace-nowrap">
//               {[...testimonials, ...testimonials].map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className="testimonial-card bg-gray-100 shadow-lg rounded-lg p-6 min-w-[300px] "
//                 >
//                   <p className="text-gray-700 break-words">
//                     {testimonial.review}
//                   </p>
//                   <div className="flex mt-4 items-center justify-center">
//                     <img
//                       src="/src/assets/images/Instructor 1.jpg"
//                       alt=""
//                       className="h-8 w-8 rounded-full"
//                     />
//                     <p className="text-gray-500 ml-2 text-primary font-semibold">
//                       {" "}
//                       {testimonial.name}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button onClick={scrollRight} className="scroll-button right-0">
//             {">"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "Fusce at massa nec sapien auctor gravida in in tellus. Vivamus sit amet semper lacus, in mollis libero.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    review:
      "Curabitur sit amet quam id libero venenatis faucibus at at eros. Aliquam euismod imperdiet felis a gravida. Proin et nisi et diam cursus molestie at a massa.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Change the interval as needed

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <div className="mt-14 flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
        <p className="mb-4">What our students say about us</p>
      </div>
      <div className="relative max-w-4xl mx-auto mb-8 p-4">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-4">
                <div className="bg-white rounded-lg text-center shadow-lg p-6 h-full">
                  <div className="flex mt-4 items-center justify-center gap-6 mb-2">
                    <img
                      src="/assets/images/Instructor 1.jpg"
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />
                    <p className="text-lg font-bold mb-2 text-primary font-serif italic">
                      {testimonial.name}
                    </p>
                  </div>
                  <p className="text-gray-700 ">{testimonial.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            onClick={handlePrev}
            className="bg-primary text-white py-2 px-4 rounded-l focus:outline-none"
          >
            {"<"}
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <button
            onClick={handleNext}
            className="bg-primary text-white py-2 px-4 rounded-r focus:outline-none"
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
