import React, { useState } from "react";

const faqs = [
  {
    question: "What Course Do You Offer",
    answer:
      "We offer a variety of courses including Quran recitation with Tajweed, basic Islamic knowledge, Duas, and more. All courses are taught by experienced Hafiz-e-Quran instructors.",
  },
  {
    question: "What are The Classes Schedule",
    answer:
      "Our classes are scheduled to accommodate different time zones in Europe, Canada, and the USA. You can find detailed schedules on our Courses page.",
  },
  {
    question: "How can I make a payment?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Detailed payment instructions are provided during the registration process.",
  },
  {
    question: "Can I get a trial class?",
    answer:
      "Yes, we offer a free trial class for new students. This allows you to experience our teaching methods and interact with our instructors before committing to a course.",
  },
  // Add more FAQs as needed
];

interface FaqProps {
  faqRef: React.MutableRefObject<null>;
}
const FAQ: React.FC<FaqProps> = ({ faqRef }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-8 relative bg-gray-extra mx-2" ref={faqRef}>
      <div className="container mx-auto text-center flex items-center flex-col sm:max-w-3xl sm:min-w-3xl w-full">
        <h2 className="text-4xl font-bold mb-6">FAQ</h2>
        <p className="font-normal mb-6 px-8">
          Find answers to the most frequently asked questions about our Quranic
          and Islamic courses, schedules, payment methods, and more.
        </p>
        <div className="w-full mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 text-left w-full">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full p-4 shadow-md flex justify-between items-center transition-all duration-500 ease-in-out ${
                  openIndex == index
                    ? "text-white bg-primary "
                    : "text-black-dark bg-white "
                }`}
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="bg-white p-4 shadow-md rounded-md transition-all duration-500 ease-in-out">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
