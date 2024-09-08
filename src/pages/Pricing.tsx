import React, { useEffect, useRef } from "react";
import PricingCard from "../components/PricingCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PricingPage = () => {
  const plans = [
    {
      title: "Basic",
      description: "The most basic plan",
      price: "$39/Month",
      trial: "Trial class is always Free",
      features: [
        "Hourly Rate: $9.75",
        "2 Classes a Week",
        "30 minutes per Class",
        "8 Classes Per Month",
      ],
    },
    {
      title: "Moderate",
      description: "Ideal choice",
      price: "$53/Month",
      trial: "Free trial lesson",
      features: [
        "Hourly Rate: $8.83",
        "3 Classes a Week",
        "30 minutes per Class",
        "6 Hours Per Month",
      ],
      popular: true,
    },
    {
      title: "Premium",
      description: "A little extra",
      price: "$69/Month",
      trial: "Absolutely free trial",
      features: [
        "Hourly Rate: $8.62",
        "4 Classes a Week",
        "30 minutes per Class",
        "8 Hours Per Month",
      ],
    },
    {
      title: "Exclusive",
      description: "Our best",
      price: "$85/Month",
      trial: "Free trial included",
      features: [
        "Hourly Rate: $8.5",
        "5 Classes a Week",
        "30 minutes per Class",
        "10 Hours Per Month",
      ],
    },
  ];
  const contactRef = useRef(null);
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const instructorsRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, []);

  return (
    <>
      <div className="min-w-screen h-full w-full maxWidth-full lg:px-6 pb-12 lg:py-12 bg-gray-extra text-black-dark text-center">
        <Header
          contactRef={contactRef}
          aboutUsRef={aboutUsRef}
          coursesRef={coursesRef}
          instructorsRef={instructorsRef}
          faqRef={faqRef}
        />
        <h1 className="text-4xl font-bold my-4">Pricing</h1>
        <p className="text-lg mb-8">
          Holistic and easy to follow learning online Quran learning experience
          for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        <div className="mt-12">
          <p className="text-xl font-semibold">
            Having trouble deciding which plan's best for you?
          </p>
          to get a quote. &nbsp;
          <button className="mt-4 bg-primary text-white py-1 px-6 rounded-full hover:bg-green-700">
            Contact Us
          </button>
        </div>
      </div>
      <Footer
        contactRef={contactRef}
        aboutUsRef={aboutUsRef}
        coursesRef={coursesRef}
        instructorsRef={instructorsRef}
        faqRef={faqRef}
      />
    </>
  );
};

export default PricingPage;
